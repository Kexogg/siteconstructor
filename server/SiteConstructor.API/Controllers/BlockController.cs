using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
    [HttpDelete("{blockId:long}")]
    public async Task<IActionResult> DeleteBlock(long pageId, long blockId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await blockService.DeleteBlockAsync(siteId, pageId, blockId);
    }
}