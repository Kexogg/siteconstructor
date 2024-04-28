using Microsoft.AspNetCore.Mvc;

namespace SiteConstructor.Services.Services.Abstract;

public interface IPageService
{
    public Task<IActionResult> AddAsync(long siteId);

    public Task<IActionResult> DeleteAsync(long siteId, long id);
}