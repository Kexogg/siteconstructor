using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
        return await siteService.GetSiteAsync(siteId);
    }
}