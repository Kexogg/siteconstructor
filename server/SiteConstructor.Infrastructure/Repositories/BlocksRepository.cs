﻿using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class BlocksRepository(DatabaseContext context) : IBlocksRepository
{
    public async Task AddAsync(BlockEntity block)
    {
        await context.Blocks.AddAsync(block);
        await context.SaveChangesAsync();
    }

    public async Task DeleteAsync(long blockId)
    {
        var block = await context.Blocks.FirstOrDefaultAsync(b=> b.BlockId==blockId);
        if (block is not null) context.Blocks.Remove(block);
        await context.SaveChangesAsync();
    }
    

    public async Task DisableBlocksAsync(long pageId, List<long> blocksId)
    {
        var page = await context.Pages.Include(pageEntity => pageEntity.Blocks).FirstOrDefaultAsync(p=> p.PageId == pageId);
        if (page is not null)
        {
            var blocks = page.Blocks.Where(b => blocksId.Contains(b.BlockId));
            foreach (var block in blocks)
            {
                block.IsEnabled = false;
            }
        }
        await context.SaveChangesAsync();
    }

    public async Task UpdateBlockAsync(long blockId, string jsonb)
    {
        var block = await context.Blocks.FirstOrDefaultAsync(b=> b.BlockId==blockId);
        if (block is not null) block.JSONB = jsonb;
        await context.SaveChangesAsync();
    }
}