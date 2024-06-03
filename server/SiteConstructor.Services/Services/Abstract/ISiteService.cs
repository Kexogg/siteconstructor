using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Sites;

namespace SiteConstructor.Services.Services.Abstract;

public interface ISiteService
{
    public Task<IActionResult> GetSiteByUserAsync(long siteId);

    public Task<IActionResult> GetSiteByClientAsync(string siteAddress);

    public Task<IActionResult> PatchSiteAsync(long siteId, UpdateSiteModel updatedSite);
}