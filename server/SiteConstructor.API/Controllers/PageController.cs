using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Services.Services.Abstract;

namespace server.Controllers;

[ApiController]
[Route("api/site/pages")]
public class PageController(IPageService pageService) : Controller
{
    private readonly IPageService _pageService = pageService;
    
    //POST
    [HttpPost]
    [Authorize]
    public async Task<IActionResult> AddPage()
    {
        var siteId = Convert.ToInt64(User.Claims.FirstOrDefault(u => u.Type == "id")?.Value);
        return await _pageService.AddAsync(siteId);
    }
}