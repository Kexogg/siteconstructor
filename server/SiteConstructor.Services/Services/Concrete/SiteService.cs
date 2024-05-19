using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Sites;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class SiteService(ISitesRepository sitesRepository) : ISiteService
{
    public async Task<IActionResult> GetSiteAsync(long siteId)
    {
        var site = await sitesRepository.GetSiteByIdAsync(siteId);
        if (site == null) return new NotFoundResult();
        return new OkObjectResult(new
        {
            site = new SiteResponseModelWithPages(site)
        });
    }
}