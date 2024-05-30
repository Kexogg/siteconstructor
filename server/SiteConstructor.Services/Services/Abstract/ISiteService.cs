using Microsoft.AspNetCore.Mvc;

namespace SiteConstructor.Services.Services.Abstract;

public interface ISiteService
{
    public Task<IActionResult> GetSiteByUserAsync(long siteId);

    public Task<IActionResult> GetSiteByClientAsync(string siteName);
}