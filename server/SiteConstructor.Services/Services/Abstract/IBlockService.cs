using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Blocks;

namespace SiteConstructor.Services.Services.Abstract;

public interface IBlockService
{
    public Task<IActionResult> AddBlockAsync(long siteId, long pageId, AddBlockModel newBlock);

    public Task<IActionResult> GetBlockByIdAsync(long siteId, long pageId, long blockId);

    public Task<IActionResult> SwitchBlocksAsync(long siteId, long pageId, List<SwitchBlocksModel> blocksToSwitch);

    public Task<IActionResult> UpdateBlockAsync(long siteId, long pageId, long blockId, AddBlockModel updatedBlock);

    public Task<IActionResult> DeleteBlockAsync(long siteId, long pageId, long blockId);

    public Task<IActionResult> AddPhotoAsync(long siteId, long pageId, long blockId, List<Stream> files);
}