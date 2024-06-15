using System.Text.Json;
using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Models.Pages;

public class PageResponseModelForClient
{
    public PageResponseModelForClient(PageEntity page)
    {
        Num = page.Num;
        Name = page.Name;
        Description = page.Description;
        Blocks = page.Blocks.Where(b=>b.IsEnabled).Select(b => new BlockResponseModelForPage(b));
    }
    
    public int Num { get; set; }
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    public IEnumerable<BlockResponseModelForPage> Blocks { get; set; }

    public class BlockResponseModelForPage(BlockEntity block)
    {
        public int Num { get; set; } = block.Num;
        
        public string Name { get; set; } = block.Name;
        
        public JsonDocument? Jsonb { get; set; } = block.Jsonb!=null ? JsonDocument.Parse(block.Jsonb) : null;

        public string Type { get; set; } = block.Type;
    }
}