using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class PagesRepository(DatabaseContext context) : IPagesRepository
{
    public async Task AddPageAsync(SiteEntity site, PageEntity page)
    {
        await context.AddAsync(page);
        context.Sites.Update(site);
        await context.SaveChangesAsync();
    }

    public async Task DeletePageAsync(long pageId)
    {
        await context.Pages.Where(p => p.Id == pageId).ExecuteDeleteAsync();
        await context.SaveChangesAsync();
    }

    public async Task UpdatePageAsync(PageEntity newPage)
    {
        context.Pages.Update(newPage);
        await context.SaveChangesAsync();
    }

    public async Task<PageEntity?> GetPageByIdAsync(long pageId)
    {
        var page = await context.Pages.FirstOrDefaultAsync();
        return page;
    }
}