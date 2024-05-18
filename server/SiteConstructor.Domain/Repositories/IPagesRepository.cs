using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Repositories;

public interface IPagesRepository
{
    public Task AddPageAsync(SiteEntity site, PageEntity page);

    public Task DeletePageAsync(long pageId);

    public Task UpdatePageAsync(PageEntity newPage);

    public Task<PageEntity?> GetPageByIdAsync(long pageId);
}