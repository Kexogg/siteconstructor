using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Blocks;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class BlockService(ISitesRepository sitesRepository, 
    IPagesRepository pagesRepository, IBlocksRepository blocksRepository) : IBlockService
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
            Jsonb = newBlock.Jsonb,
            Page = page
        };
        page.Blocks.Add(block);
        await pagesRepository.UpdatePageAsync(page);
        return new OkObjectResult( new
        {
            block = new BlockResponseModel(block)
        });
    }

    public async Task<IActionResult> GetBlockByIdAsync(long siteId, long pageId, long blockId)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = page.Blocks.FirstOrDefault(b => b.Id == blockId);
        if (block == null) return new NotFoundResult();
        return new OkObjectResult(new { block = new BlockResponseModel(block) });
    }

    public async Task<IActionResult> UpdateBlockAsync(long siteId, long pageId, long blockId, AddBlockModel updatedBlock)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site?.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page == null) return new NotFoundResult();
        var block = page.Blocks.FirstOrDefault(b => b.Id == blockId);
        if (block == null) return new NotFoundResult();
        await blocksRepository.UpdateBlockAsync(block.Id, updatedBlock);

        return new OkObjectResult(new
        {
            block = new BlockResponseModel(block)
        });
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
            blocks = page.Blocks.Select(b=> new BlockResponseModel(b))
        });
    }

    public async Task<IActionResult> SwitchBlocksAsync(long siteId, long pageId, List<SwitchBlocksModel> blocksToSwitch)
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
            blocks = page.Blocks.Select(b=> new BlockResponseModel(b))
        });
    }
    
    
}