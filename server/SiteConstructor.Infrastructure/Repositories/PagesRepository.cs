using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;

namespace SiteConstructor.Infrastructure.Repositories;

public class PagesRepository(DatabaseContext context) : IPagesRepository
{
    private readonly DatabaseContext _context = context;
    public async Task AddAsync(SiteEntity site, PageEntity page)
    {
        await _context.AddAsync(page);
        _context.Sites.Update(site); 
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(long pageId)
    {
        await _context.Pages.Where(p => p.Id == pageId).ExecuteDeleteAsync();
        await _context.SaveChangesAsync();
    }

    public async Task UpdatePageAsync(PageEntity newPage)
    {
        _context.Pages.Update(newPage);
        await _context.SaveChangesAsync();
    }
    

    public async Task SwitchPageAsync(long pageId)
    {
        var page = await _context.Pages.FirstOrDefaultAsync(p => p.Id == pageId);
        if (page is not null) page.IsEnabled = Switch(page.IsEnabled);
        await _context.SaveChangesAsync();
    }

    public static bool Switch(bool value)
    {
        return !value;
    }
}