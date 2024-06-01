using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Pages;

namespace SiteConstructor.Domain.Models.Sites;

public class SiteResponseModelWithPages
{
    public SiteResponseModelWithPages(SiteEntity site)
    {
        Id = site.Id;
        SiteName = site.SiteName;
        Styles = site.Styles;
        Pages = site.Pages.Select(p => new PageResponseModel(p));
    } 
        
    public long Id { get; set; }
    public string SiteName { get; set; }
    public string? Styles { get; set; }
    public IEnumerable<PageResponseModel> Pages { get; set; }
}