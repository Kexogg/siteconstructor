using System.Net;
using System.Web;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Sites;
using SiteConstructor.Services.Services.Abstract;

namespace server.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class SiteController(ISiteService siteService) : Controller
{
    [HttpGet]
    public async Task<IActionResult> GetSite()
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await siteService.GetSiteByUserAsync(siteId);
    }

    [AllowAnonymous]
    [HttpGet("{siteName}")]
    public async Task<IActionResult> GetSiteByClient(string siteName)
    {
        return await siteService.GetSiteByClientAsync(siteName);
    }

    [HttpPatch]
    public async Task<IActionResult> PatchSite([FromBody] UpdateSiteModel updatedSite)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await siteService.PatchSiteAsync(siteId, updatedSite);
    }
}