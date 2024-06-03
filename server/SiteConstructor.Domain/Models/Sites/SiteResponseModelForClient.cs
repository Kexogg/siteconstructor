using System.Text.Json;
using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Pages;

namespace SiteConstructor.Domain.Models.Sites;

public class SiteResponseModelForClient
{
        public SiteResponseModelForClient(SiteEntity site)
        {
            Styles = site.Styles!=null ? JsonDocument.Parse(site.Styles) : null;
            Pages = site.Pages.Where(p=>p.IsEnabled).Select(p => new PageResponseModelForSite(p));
        } 
        public JsonDocument? Styles { get; set; }

        public IEnumerable<PageResponseModelForSite> Pages { get; set; }

        public class PageResponseModelForSite(PageEntity page)
        {
            public int Num { get; set; } = page.Num;
            public string Address { get; set; } = page.Address;
            public string Name { get; set; } = page.Name;
            public string Description { get; set; } = page.Description;
        }
}