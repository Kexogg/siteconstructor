using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Blocks;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class BlockService(ISitesRepository sitesRepository, 
    IPagesRepository pagesRepository, IBlocksRepository blocksRepository,
    IBucketService bucketService) : IBlockService
{
    public async Task<IActionResult> AddBlockAsync(long siteId, long pageId, AddBlockModel newBlock)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = new BlockEntity
        {
            Num = page.Blocks.Count + 1,
            Name = newBlock.Name,
            IsEnabled = newBlock.IsEnabled,
            ImagesCount = 0,
            Jsonb = newBlock.Jsonb,
            Page = page,
            Type = newBlock.Type
        };
        page.Blocks.Add(block);
        await pagesRepository.UpdatePageAsync(page);
        return new OkObjectResult( new
        {
            block = new BlockResponseModel(block, siteId)
        });
    }

    public async Task<IActionResult> GetBlockByIdAsync(long siteId, long pageId, long blockId)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = page.Blocks.FirstOrDefault(b => b.Id == blockId);
        if (block == null) return new NotFoundResult();
        
        return new OkObjectResult(new { block = new BlockResponseModel(block, siteId) });
    }

    public async Task<IActionResult> MoveBlockAsync(long siteId, long pageId, MoveBlockModel blockToMove)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = page.Blocks.FirstOrDefault(b => b.Id == blockToMove.Id);
        if (block == null) return new NotFoundResult();
        if (blockToMove.Num > block.Num)
        {
            foreach (var item in page.Blocks.Where(b=>b.Num>block.Num && b.Num<=blockToMove.Num))
            {
                item.Num--;
            }
        }
        else if (blockToMove.Num < block.Num)
        {
            foreach (var item in page.Blocks.Where(b=>b.Num<block.Num && b.Num>=blockToMove.Num))
            {
                item.Num++;
            }
        }
        block.Num = blockToMove.Num;
        await pagesRepository.UpdatePageAsync(page);
        return new OkObjectResult( new
        {
            blocks = page.Blocks.Select(b=> new BlockResponseModel(b,siteId))
        });
    }

    public async Task<IActionResult> UpdateBlockAsync(long siteId, long pageId, long blockId, AddBlockModel updatedBlock)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = page.Blocks.FirstOrDefault(b => b.Id == blockId);
        if (block == null) return new NotFoundResult();
        block.IsEnabled = updatedBlock.IsEnabled;
        block.Jsonb = updatedBlock.Jsonb;
        block.Type = updatedBlock.Type;
        block.Name = updatedBlock.Name;
        await blocksRepository.UpdateBlockAsync(block);

        
        return new OkObjectResult(new { block = new BlockResponseModel(block, siteId) });
    }

    public async Task<IActionResult> DeleteBlockAsync(long siteId, long pageId, long blockId)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = page.Blocks.FirstOrDefault(b => b.Id == blockId);
        if (block == null) return new NotFoundResult();
        foreach (var pageBlock in page.Blocks.Where(b=>b.Num > block.Num))
        {
            pageBlock.Num--;
        }

        page.Blocks.Remove(block);
        await sitesRepository.UpdateSiteAsync(site);

        return new OkObjectResult(new
        {
            blocks = page.Blocks.Select(b=> new BlockResponseModel(block,siteId))
        });
    }

    public async Task<IActionResult> AddPhotoAsync(long siteId, long pageId, long blockId, List<Stream> files)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = page.Blocks.FirstOrDefault(b => b.Id == blockId);
        if (block == null) return new NotFoundResult();
        var response = await bucketService.PutPhotosAsync(siteId, pageId, blockId, block.ImagesCount, files);
        if (response.S3Objects.IsNullOrEmpty()) return new EmptyResult();
        block.ImagesCount = response.S3Objects.Count;
        await blocksRepository.UpdateBlockAsync(block);
        return new OkObjectResult(new
        {
            block = new BlockResponseModel(block, siteId)
        });
    }

    public async Task<IActionResult> ReplacePhotoAsync(long siteId, long pageId, long blockId, int photoId, Stream file)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = page.Blocks.FirstOrDefault(b => b.Id == blockId);
        if (block == null) return new NotFoundResult();
        if (block.ImagesCount==0 || block.ImagesCount < photoId) return new BadRequestResult();
        bucketService.ReplacePhotoAsync(siteId, pageId, blockId, photoId, file);
        return new OkObjectResult(new
        {
            block = new BlockResponseModel(block, siteId)
        });
    }

    /*public async Task<IActionResult> SwitchBlocksAsync(long siteId, long pageId, List<MoveBlockModel> blocksToSwitch)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        foreach (var blockToSwitch in blocksToSwitch)
        {
            var block = page.Blocks.First(b => b.Id == blockToSwitch.Id);
            block.Num = blockToSwitch.Num;
        }

        await pagesRepository.UpdatePageAsync(page);
        return new OkObjectResult( new
        {
            blocks = page.Blocks.Select(b=> new BlockResponseModel(b,siteId))
        });
    }*/
    
}