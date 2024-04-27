using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Repositories;

public interface IPagesRepository
{
    public Task AddAsync(PageEntity page);

    public Task DeleteAsync(long pageId);

    public Task DisablePageAsync(long pageId);

    public Task EnablePageAsync(long pageId);
}