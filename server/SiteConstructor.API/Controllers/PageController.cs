using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Pages;
using SiteConstructor.Services.Services.Abstract;

namespace server.Controllers;

[ApiController]
[Authorize]
[Route("api/site/[controller]")]
public class PageController(IPageService pageService) : Controller
{
    //POST
    [HttpPost]
    public async Task<IActionResult> AddPage([FromBody]AddPageModel newPage)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await pageService.AddPageAsync(siteId, newPage);
    }

    [HttpGet("{pageId:long}")]
    public async Task<IActionResult> GetPage(long pageId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await pageService.GetPageByIdAsync(siteId, pageId);
    }
    [AllowAnonymous]
    [HttpGet("/api/site/{siteName}/page/{pageName}")]
    public async Task<IActionResult> GetPageByClient(string siteName, string pageName)
    {
        return await pageService.GetPageByAddressAsync(siteName, pageName);
    }
    
    [AllowAnonymous]
    [HttpGet("/api/site/{siteName}/page/")]
    public async Task<IActionResult> GetDefaultPageByClient(string siteName)
    {
        return await pageService.GetDefaultPageAsync(siteName);
    }

    [HttpPatch("{pageId:long}")]
    public async Task<IActionResult> UpdatePage([FromBody] UpdatePageModel updatedPage, long pageId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await pageService.UpdatePageAsync(siteId,pageId, updatedPage);
    }

    [HttpPatch]
    public async Task<IActionResult> SwitchPages([FromBody] List<SwitchPagesModel> pagesToSwitch)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await pageService.SwitchPagesAsync(siteId, pagesToSwitch);
    }

    [HttpDelete("{pageId:long}")]
    public async Task<IActionResult> DeletePage(long pageId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await pageService.DeletePageAsync(siteId, pageId);
    }
}