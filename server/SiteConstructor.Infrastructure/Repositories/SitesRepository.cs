using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class SitesRepository(DatabaseContext context) : ISitesRepository
{
    public async Task AddAsync(SiteEntity site)
    {
        await context.Sites.AddAsync(site);
        await context.SaveChangesAsync();
    }

    public async Task DeleteAsync(long siteId)
    {
        var site = await context.Sites.FirstOrDefaultAsync(s => s.UserId == siteId);
        if (site is not null) context.Sites.Remove(site);
        await context.SaveChangesAsync();
    }
}