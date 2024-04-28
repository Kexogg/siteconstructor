using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Repositories;

public interface ISitesRepository
{
    public Task AddAsync(SiteEntity site);

    public Task DeleteAsync(long siteId);

    public Task<SiteEntity?> GetByIdAsync(long siteId);

    public Task UpdateAsync(SiteEntity site);
}