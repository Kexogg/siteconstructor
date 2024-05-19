using Microsoft.AspNetCore.Mvc;

namespace SiteConstructor.Services.Services.Abstract;

public interface ISiteService
{
    public Task<IActionResult> GetSiteAsync(long siteId);
}