using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Blocks;

namespace SiteConstructor.Domain.Repositories;

public interface IBlocksRepository
{
    public Task AddAsync(BlockEntity block);

    public Task DeleteAsync(long blockId);
    
    public Task DisableBlocksAsync(long pageId, List<long> blocksId);

    public Task UpdateBlockAsync(BlockEntity updatedBlock);
}