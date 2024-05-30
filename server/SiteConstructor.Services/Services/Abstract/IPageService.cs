using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Pages;

namespace SiteConstructor.Services.Services.Abstract;

public interface IPageService
{
    public Task<IActionResult> AddPageAsync(long siteId, string pageName);

    public Task<IActionResult> GetPageByIdAsync(long siteId, long pageId);
    
    public Task<IActionResult> GetPageByNameAsync(string siteName, string pageName);

    public Task<IActionResult> UpdatePageAsync(long siteId,long id, UpdatePageModel updatedPage);

    public Task<IActionResult> SwitchPagesAsync(long siteId, List<SwitchPagesModel> pagesToSwitch);

    public Task<IActionResult> DeletePageAsync(long siteId, long id);
}