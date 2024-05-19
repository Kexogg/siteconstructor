using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Repositories;

public interface ISitesRepository
{
    public Task AddSiteAsync(SiteEntity site);

    public Task DeleteSiteAsync(long siteId);

    public Task<SiteEntity?> GetSiteByIdAsync(long siteId);

    public Task UpdateSiteAsync(SiteEntity site);
}