using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class PagesRepository(DatabaseContext context) : IPagesRepository
{
    private readonly DatabaseContext _context = context;
    public async Task AddPageAsync(SiteEntity site, PageEntity page)
    {
        await _context.AddAsync(page);
        _context.Sites.Update(site);
        await _context.SaveChangesAsync();
    }

    public async Task DeletePageAsync(long pageId)
    {
        await _context.Pages.Where(p => p.Id == pageId).ExecuteDeleteAsync();
        await _context.SaveChangesAsync();
    }

    public async Task UpdatePageAsync(PageEntity newPage)
    {
        _context.Pages.Update(newPage);
        await _context.SaveChangesAsync();
    }

    public async Task<PageEntity?> GetPageByIdAsync(long pageId)
    {
        var page = await _context.Pages.FirstOrDefaultAsync();
        return page;
    }
}