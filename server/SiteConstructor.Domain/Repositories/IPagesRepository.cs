using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Repositories;

public interface IPagesRepository
{
    public Task AddAsync(SiteEntity site, PageEntity page);

    public Task DeleteAsync(long pageId);

    public Task UpdatePageAsync(PageEntity newPage);

    public Task SwitchPageAsync(long pageId);
}