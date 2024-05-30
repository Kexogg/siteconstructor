using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class SitesRepository(DatabaseContext context) : ISitesRepository
{
    public async Task AddSiteAsync(SiteEntity site)
    {
        await context.Sites.AddAsync(site);
        await context.SaveChangesAsync();
    }

    public async Task DeleteSiteAsync(long siteId)
    {
        await context.Sites.Where(s => s.Id == siteId).ExecuteDeleteAsync();
        await context.SaveChangesAsync();
    }

    public async Task<SiteEntity?> GetSiteByIdAsync(long siteId)
    {
        return await context.Sites.Include(s=>s.Pages).ThenInclude(p=>p.Blocks)
            .FirstOrDefaultAsync(s => s.Id == siteId);
    }
    
    public async Task<SiteEntity?> GetSiteByNameAsync(string siteName)
    {
        return await context.Sites.Include(s=>s.Pages).ThenInclude(p=>p.Blocks)
            .FirstOrDefaultAsync(s => s.SiteName== siteName);
    }
    
    public async Task<bool> IsSiteNameExists(string siteName)
    {
        return await context.Sites.AnyAsync(s=> s.SiteName == siteName);
    }

    public async Task UpdateSiteAsync(SiteEntity site)
    {
        context.Sites.Update(site);
        await context.SaveChangesAsync();
    }
}