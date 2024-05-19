using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Pages;

namespace SiteConstructor.Domain.Models.Sites;

public class SiteResponseModelWithPages
{
    public SiteResponseModelWithPages(SiteEntity site)
    {
        Id = site.Id;
        Pages = site.Pages.Select(p => new PageResponseModel(p));
    } 
        
    public long Id { get; set; }

    public IEnumerable<PageResponseModel> Pages { get; set; }
}