using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class SitesRepository(DatabaseContext context) : ISitesRepository
{
    private readonly DatabaseContext _context = context;
    public async Task AddAsync(SiteEntity site)
    {
        await _context.Sites.AddAsync(site);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(long siteId)
    {
        await _context.Sites.Where(s => s.Id == siteId).ExecuteDeleteAsync();
        await _context.SaveChangesAsync();
    }

    public async Task<SiteEntity?> GetByIdAsync(long siteId)
    {
        return await _context.Sites.Include(s=>s.Pages)
            .FirstOrDefaultAsync(s => s.Id == siteId);
    }

    public async Task UpdateAsync(SiteEntity site)
    {
        _context.Sites.Update(site);
        await _context.SaveChangesAsync();
    }
}