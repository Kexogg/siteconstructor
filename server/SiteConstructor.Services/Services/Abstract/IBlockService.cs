using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Blocks;

namespace SiteConstructor.Services.Services.Abstract;

public interface IBlockService
{
    public Task<IActionResult> AddBlockAsync(long siteId, long pageId, AddBlockModel newBlock);

    public Task<IActionResult> GetBlockByIdAsync(long siteId, long pageId, long blockId);

    /*public Task<IActionResult> SwitchBlocksAsync(long siteId, long pageId, List<MoveBlockModel> blocksToSwitch);*/
    
    public Task<IActionResult> MoveBlockAsync(long siteId, long pageId, MoveBlockModel blockToMove);

    public Task<IActionResult> UpdateBlockAsync(long siteId, long pageId, long blockId, AddBlockModel updatedBlock);

    public Task<IActionResult> DeleteBlockAsync(long siteId, long pageId, long blockId);

    public Task<IActionResult> AddPhotoAsync(long siteId, long pageId, long blockId, List<Stream> files);

    public Task<IActionResult> ReplacePhotoAsync(long siteId, long pageId, long blockId, int photoId, Stream file);
    public Task<IActionResult> DeletePhotoAsync(long siteId, long pageId, long blockId, int photoId);
}