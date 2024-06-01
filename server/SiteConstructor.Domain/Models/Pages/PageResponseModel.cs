using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Models.Pages;

public class PageResponseModel(PageEntity page)
{
    public long Id { get; set; } = page.Id;

    public int Num { get; set; } = page.Num;
    public string Address { get; set; } = page.Address;
    public string Name { get; set; } = page.Name;
    public string Description { get; set; } = page.Description;
    public bool IsEnabled { get; set; } = page.IsEnabled;
}