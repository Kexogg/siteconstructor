using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Pages;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class PageService(ISitesRepository sitesRepository, IPagesRepository pagesRepository) : IPageService
{
    private readonly IPagesRepository _pagesRepository = pagesRepository;
    
    private readonly ISitesRepository _sitesRepository = sitesRepository;
    
    public async Task<IActionResult> AddPageAsync(long siteId, string pageName)
    {
        var site = await _sitesRepository.GetByIdAsync(siteId);
        var page = new PageEntity
        {
            IsEnabled = false,
            Name = pageName,
            Site = site
        };
        site.Pages.Add(page);
        await _sitesRepository.UpdateAsync(site);
        return new OkObjectResult(new
        {
            page.Id,
            page.Name,
            page.IsEnabled
        });
    }

    public async Task<IActionResult> UpdatePageAsync(long siteId, long id, UpdatePageModel updatedPage)
    {
        var site = await _sitesRepository.GetByIdAsync(siteId);
        var page = site.Pages.FirstOrDefault(p => p.Id == id);
        if (page != null)
        {
            page.Name = updatedPage.Name;
            page.IsEnabled = updatedPage.IsEnabled;
            await _pagesRepository.UpdatePageAsync(page);
            return new OkResult();
        }

        return new NotFoundResult();
    }

    public async Task<IActionResult> DeletePageAsync(long siteId, long id)
    {
        var site = await _sitesRepository.GetByIdAsync(siteId);
        var page = site.Pages.FirstOrDefault(p => p.Id == id);
        if (page is not null)
        {
            site.Pages.Remove(page);
            await _sitesRepository.UpdateAsync(site);
            return new OkResult();
        }

        return new NotFoundResult();
    }
}