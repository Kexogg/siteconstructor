using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Repositories;

public interface IBlocksRepository
{
    public Task AddAsync(BlockEntity block);

    public Task DeleteAsync(long blockId);
    
    public Task DisableBlocksAsync(long pageId, List<long> blocksId);

    public Task UpdateBlockAsync(BlockEntity updatedBlock);
}