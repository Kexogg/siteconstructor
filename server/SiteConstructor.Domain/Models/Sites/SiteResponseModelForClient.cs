using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Pages;

namespace SiteConstructor.Domain.Models.Sites;

public class SiteResponseModelForClient
{
        public SiteResponseModelForClient(SiteEntity site)
        {
            Styles = site.Styles;
            Pages = site.Pages.Where(p=>p.IsEnabled).Select(p => new PageResponseModelForSite(p));
        } 
        public string? Styles { get; set; }

        public IEnumerable<PageResponseModelForSite> Pages { get; set; }

        public class PageResponseModelForSite(PageEntity page)
        {
            public int Num { get; set; } = page.Num;
            public string Name { get; set; } = page.Name;
        }
}