using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class PagesRepository(DatabaseContext context) : IPagesRepository
{
    public async Task AddAsync(PageEntity page)
    {
        await context.Pages.AddAsync(page);
        await context.SaveChangesAsync();
    }

    public async Task DeleteAsync(long pageId)
    {
        var page = await context.Pages.FirstOrDefaultAsync(p => p.PageId == pageId);
        if (page is not null)  context.Remove(page);
        await context.SaveChangesAsync();
    }
    

    public async Task DisablePageAsync(long pageId)
    {
        var page = await context.Pages.FirstOrDefaultAsync(p => p.PageId == pageId);
        if (page is not null) page.IsEnabled = false;
        await context.SaveChangesAsync();
    }

    public async Task EnablePageAsync(long pageId)
    {
        var page = await context.Pages.FirstOrDefaultAsync(p => p.PageId == pageId);
        if (page is not null) page.IsEnabled = true;
        await context.SaveChangesAsync();
    }
}