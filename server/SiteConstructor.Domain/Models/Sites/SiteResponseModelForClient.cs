using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Pages;

namespace SiteConstructor.Domain.Models.Sites;

public class SiteResponseModelForClient
{
        public SiteResponseModelForClient(SiteEntity site)
        {
            Jsonb = site.Jsonb;
            Pages = site.Pages.Where(p=>p.IsEnabled).Select(p => new PageResponseModelForSite(p));
        } 
        public string? Jsonb { get; set; }

        public IEnumerable<PageResponseModelForSite> Pages { get; set; }

        public class PageResponseModelForSite(PageEntity page)
        {
            public int Num { get; set; } = page.Num;
            public string Name { get; set; } = page.Name;
        }
}