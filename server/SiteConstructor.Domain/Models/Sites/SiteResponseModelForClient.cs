using System.Text.Json;
using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Models.Sites;

public class SiteResponseModelForClient
{
        public SiteResponseModelForClient(SiteEntity site)
        {
            SiteAddress = site.SiteAddress;
            SiteName = site.SiteName;
            Styles = site.Styles!=null ? JsonDocument.Parse(site.Styles) : null;
            Pages = site.Pages.Where(p=>p.IsEnabled).Select(p => new PageResponseModelForSite(p));
            LogoUrl = $"https://s3.stk8s.66bit.ru/nyashdev/{site.Id}/logo.jpg";
        } 
        public string SiteAddress { get; set; }
        public string? SiteName { get; set; }
        public JsonDocument? Styles { get; set; }
        
        public string LogoUrl { get; set; }
        public IEnumerable<PageResponseModelForSite> Pages { get; set; }

        public class PageResponseModelForSite(PageEntity page)
        {
            public int Num { get; set; } = page.Num;
            public string Address { get; set; } = page.Address;
            public string Name { get; set; } = page.Name;
            public string Description { get; set; } = page.Description;
        }
}