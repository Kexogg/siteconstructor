using Microsoft.AspNetCore.Mvc;
using SiteConstructor.Domain.Models.Pages;

namespace SiteConstructor.Services.Services.Abstract;

public interface IPageService
{
    public Task<IActionResult> AddPageAsync(long siteId, string pageName);

    public Task<IActionResult> UpdatePageAsync(long siteId,long id, UpdatePageModel updatedPage);

    public Task<IActionResult> DeletePageAsync(long siteId, long id);
}