using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SiteConstructor.Domain.Models.Blocks;
using SiteConstructor.Services.Services.Abstract;

namespace server.Controllers;

[ApiController]
[Authorize]
[Route("api/site/pages/{pageId:long}/[controller]")]
public class BlockController(IBlockService blockService) : Controller
{
    [HttpPost]
    public async Task<IActionResult> AddBlock ([FromBody] AddBlockModel block, long pageId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await blockService.AddBlockAsync(siteId, pageId, block);
    }

    [HttpGet("{blockId:long}")]
    public async Task<IActionResult> GetBlock (long pageId, long blockId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await blockService.GetBlockByIdAsync(siteId, pageId, blockId);
    }

    [HttpPatch("{blockId:long}")]
    public async Task<IActionResult> PatchBlock([FromBody]AddBlockModel updatedBlock, long pageId, long blockId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await blockService.UpdateBlockAsync(siteId, pageId, blockId, updatedBlock);
    }

    [HttpPatch]
    public async Task<IActionResult> SwitchBlocks([FromBody] List<SwitchBlocksModel> blocksToSwitch, long pageId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await blockService.SwitchBlocksAsync(siteId, pageId, blocksToSwitch);
    }

    [HttpPatch("{blockId:long}/photo")]
    public async Task<IActionResult> AddPhoto(long pageId, long blockId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        if (Request is not { HasFormContentType: true, Form.Files.Count: > 0 })
            return new EmptyResult();
        var files = Request.Form.Files
            .Where(file => file.ContentType == "image/jpeg").Select(file => file.OpenReadStream()).ToList();
        if (files.IsNullOrEmpty())
        {
            return new EmptyResult();
        }
        return await blockService.AddPhotoAsync(siteId, pageId, blockId, files);
    }
    [HttpDelete("{blockId:long}")]
    public async Task<IActionResult> DeleteBlock(long pageId, long blockId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await blockService.DeleteBlockAsync(siteId, pageId, blockId);
    }
}