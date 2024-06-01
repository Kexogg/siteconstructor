using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Sites;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class SiteService(ISitesRepository sitesRepository) : ISiteService
{
    public async Task<IActionResult> GetSiteByUserAsync(long siteId)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        if (site == null) return new NotFoundResult();
        return new OkObjectResult(new
        {
            site = new SiteResponseModelWithPages(site)
        });
    }

    public async Task<IActionResult> GetSiteByClientAsync(string siteName)
    {
        var site = await sitesRepository.GetSiteByNameAsync(siteName);
        if (site == null) return new NotFoundResult();
        return new OkObjectResult(new
        {
            site = new SiteResponseModelForClient(site)
        });
    }

    public async Task<IActionResult> PatchSiteAsync(long siteId,UpdateSiteModel updatedSite)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        if (site == null) return new NotFoundResult();
        if (site.SiteName != updatedSite.SiteName && await sitesRepository.GetSiteByNameAsync(updatedSite.SiteName) != null)
            return new ConflictResult();
        site.SiteName = updatedSite.SiteName;
        site.Styles = updatedSite.Styles;
        await sitesRepository.UpdateSiteAsync(site);
        return new OkObjectResult(new SiteResponseModelWithPages(site));
    }
}