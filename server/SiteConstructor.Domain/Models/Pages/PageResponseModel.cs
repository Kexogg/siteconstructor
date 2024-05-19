using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Models.Pages;

public class PageResponseModel
{
    public PageResponseModel(PageEntity page)
    {
        Id = page.Id;
        Num = page.Num;
        Name = page.Name;
        IsEnabled = page.IsEnabled;
    }
    public long Id { get; set; }
    
    public int Num { get; set; }
    
    public string Name { get; set; }
    
    public bool IsEnabled { get; set; }
}