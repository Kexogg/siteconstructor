using System.Text.Json;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Pages;

namespace SiteConstructor.Domain.Models.Sites;

public class SiteResponseModelWithPages
{
    public SiteResponseModelWithPages(SiteEntity site)
    {
        Id = site.Id;
        SiteAddress = site.SiteAddress;
        SiteName = site.SiteName;
        Styles = site.Styles!=null ? JsonDocument.Parse(site.Styles) : null;
        Pages = site.Pages.Select(p => new PageResponseModel(p));
        LogoUrl = $"https://s3.stk8s.66bit.ru/nyashdev/{site.Id}/logo.jpg";
    } 
        
    public long Id { get; set; }
    public string SiteAddress { get; set; }
    public string? SiteName { get; set; }
    public JsonDocument? Styles { get; set; }
    public string LogoUrl { get; set; }
    public IEnumerable<PageResponseModel> Pages { get; set; }
}