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
public class SiteController(ISiteService siteService, IBucketService bucketService) : Controller
{
    [HttpGet]
    public async Task<IActionResult> GetSite()
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await siteService.GetSiteByUserAsync(siteId);
    }

    [AllowAnonymous]
    [HttpGet("{siteAddress}")]
    public async Task<IActionResult> GetSiteByClient(string siteAddress)
    {
        return await siteService.GetSiteByClientAsync(siteAddress);
    }

    [HttpPatch]
    public async Task<IActionResult> PatchSite([FromBody] UpdateSiteModel updatedSite)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        if (Request is not { HasFormContentType: true, Form.Files.Count: > 0 })
            return await siteService.PatchSiteAsync(siteId, updatedSite);
        var fileRequest = Request.Form.Files[0];
        if (fileRequest.ContentType != "image/jpeg") return BadRequest("Invalid image type");
        await using var file = fileRequest.OpenReadStream();
        bucketService.PutLogoAsync(siteId, file);

        return await siteService.PatchSiteAsync(siteId, updatedSite);
    }
}