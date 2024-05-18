using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Pages;
using SiteConstructor.Services.Services.Abstract;

namespace server.Controllers;

[ApiController]
[Authorize]
[Route("api/site/pages")]
public class PageController(IPageService pageService) : Controller
{
    private readonly IPageService _pageService = pageService;
    
    //POST
    [HttpPost]
    public async Task<IActionResult> AddPage([FromBody]string pageName)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await _pageService.AddPageAsync(siteId, pageName);
    }

    [HttpPatch]
    [Route("/{pageId:long}")]
    public async Task<IActionResult> UpdatePage([FromBody] UpdatePageModel updatedPage, long pageId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await _pageService.UpdatePageAsync(siteId,pageId,updatedPage);
    }

    [HttpDelete]
    [Route("/{pageId:long}")]
    public async Task<IActionResult> DeletePage(long pageId)
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await _pageService.DeletePageAsync(siteId, pageId);
    }
}