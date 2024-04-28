using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class PageService(ISitesRepository sitesRepository, IPagesRepository pagesRepository) : IPageService
{
    private readonly IPagesRepository _pagesRepository = pagesRepository;
    
    private readonly ISitesRepository _sitesRepository = sitesRepository;
    
    public async Task<IActionResult> AddAsync(long siteId)
    {
        var site = await _sitesRepository.GetByIdAsync(siteId);
        var page = new PageEntity
        {
            PageNum = site.Pages.Count + 1,
            IsEnabled = false,
            Site = site
        };
        await _pagesRepository.AddAsync(site, page);
        return new OkResult();
    }
    

    public async Task<IActionResult> DeleteAsync(long siteId,long id)
    {
        var site = await _sitesRepository.GetByIdAsync(siteId);
        var page = site.Pages.FirstOrDefault(p => p.Id == id);
        if (page is not null)
        {
            await _pagesRepository.DeleteAsync(id);
            foreach (var item in site.Pages.Where(i=>i.PageNum > page.PageNum))
            {
                item.PageNum--;
                await _pagesRepository.UpdatePageAsync(item);
            }

            await _sitesRepository.UpdateAsync(site);
            return new OkObjectResult(new{ site.Pages }) ;
        }

        return new NotFoundResult();
    }
}