using SiteConstructor.Domain.Entities;
using SiteConstructor.Domain.Models.Blocks;

namespace SiteConstructor.Domain.Models.Pages;

public class PageResponseModelForClient
{
    public PageResponseModelForClient(PageEntity page)
    {
        Num = page.Num;
        Name = page.Name;
        Blocks = page.Blocks.Where(b=>b.IsEnabled).Select(b => new BlockResponseModelForPage(b));
    }
    
    public int Num { get; set; }
    
    public string Name { get; set; }
    
    
    public IEnumerable<BlockResponseModelForPage> Blocks { get; set; }

    public class BlockResponseModelForPage(BlockEntity block)
    {
        public int Num { get; set; } = block.Num;
        
        public string Name { get; set; } = block.Name;
        
        public string Jsonb { get; set; } = block.Jsonb;
    }
}