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
        Blocks = page.Blocks.Where(b=>b.IsEnabled).Select(b => new BlockResponseModelForPage(b, 
            page.SiteId));
    }
    
    public int Num { get; set; }
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    public IEnumerable<BlockResponseModelForPage> Blocks { get; set; }

    public class BlockResponseModelForPage
    {
        public BlockResponseModelForPage(BlockEntity block, long siteId)
        {
            Num = block.Num;
            Name = block.Name;
            Jsonb = block.Jsonb!=null ? JsonDocument.Parse(block.Jsonb) : null;
            Type = block.Type;
            if (ImagesCount == 0) return;
            ImagesUrls = [];
            for (int i = 0; i < block.ImagesCount; i++)
            {
                ImagesUrls.Add($"https://s3.stk8s.66bit.ru/nyashdev/{siteId}/{block.PageId}/{block.Id}/{i+1}");
            }
        }

        public int Num { get; set; }
        
        public string Name { get; set; }
        
        public int ImagesCount { get; set; }
        
        public JsonDocument? Jsonb { get; set; }

        public string Type { get; set; }
        
        public List<string>? ImagesUrls { get; set; }
    }
}