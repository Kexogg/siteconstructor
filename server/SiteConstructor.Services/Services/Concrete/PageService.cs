using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Pages;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class PageService(ISitesRepository sitesRepository, IPagesRepository pagesRepository) : IPageService
{
    public async Task<IActionResult> AddPageAsync(long siteId, string pageName)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = new PageEntity
        {
            IsEnabled = false,
            Name = pageName,
            Num = site.Pages.Count+1,
            Site = site
        };
        site.Pages.Add(page);
        await sitesRepository.UpdateSiteAsync(site);
        return new OkObjectResult(new
        {
            page = new PageResponseModel(page)
        });
    }

    public async Task<IActionResult> GetPageByIdAsync(long siteId, long pageId)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site.Pages.FirstOrDefault(p => p.Id == pageId);
        if (page != null)
        {
            return new OkObjectResult(new
            {
                page = new PageResponseModelWithBlocks(page)
            });
        }

        return new NotFoundResult();
    }

    public async Task<IActionResult> UpdatePageAsync(long siteId, long id, UpdatePageModel updatedPage)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site.Pages.FirstOrDefault(p => p.Id == id);
        if (page != null)
        {
            page.Name = updatedPage.Name;
            page.IsEnabled = updatedPage.IsEnabled;
            await pagesRepository.UpdatePageAsync(page);
            return new OkObjectResult(new
            {
                page = new PageResponseModel(page)
            });
        }

        return new NotFoundResult();
    }

    public async Task<IActionResult> SwitchPagesAsync(long siteId, List<SwitchPagesModel> pagesToSwitch)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        foreach (var pageToSwitch in pagesToSwitch)
        {
            var page = site.Pages.First(p => p.Id == pageToSwitch.Id);
            page.Num = pageToSwitch.Num;
        }

        await sitesRepository.UpdateSiteAsync(site);
        return new OkObjectResult(new
        {
            pages = site.Pages.Select(p => new PageResponseModel(p))
        });
    }

    public async Task<IActionResult> DeletePageAsync(long siteId, long id)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        var page = site.Pages.FirstOrDefault(p => p.Id == id);
        if (page is not null)
        {
            foreach (var nextPage in site.Pages.Where(p=> p.Num > page.Num))
            {
                nextPage.Num--;
            }
            site.Pages.Remove(page);
            await sitesRepository.UpdateSiteAsync(site);
            return new OkResult();
        }

        return new NotFoundResult();
    }
}