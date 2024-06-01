using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Blocks;

namespace SiteConstructor.Domain.Models.Pages;

public class PageResponseModelWithBlocks
{
    public PageResponseModelWithBlocks(PageEntity page)
    {
        Id = page.Id;
        Num = page.Num;
        Address = page.Address;
        Name = page.Name;
        Description = page.Description;
        IsEnabled = page.IsEnabled;
        Blocks = page.Blocks.Select(b => new BlockResponseModel(b));
    }
    public long Id { get; set; }
    
    public int Num { get; set; }
    
    public string Address { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public bool IsEnabled { get; set; }
    
    public IEnumerable<BlockResponseModel> Blocks { get; set; }
}