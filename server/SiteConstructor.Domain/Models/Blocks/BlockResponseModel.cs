using System.Text.Json;
using SiteConstructor.Domain.Entities;


namespace SiteConstructor.Domain.Models.Blocks;

public class BlockResponseModel
{
    public BlockResponseModel(BlockEntity block, long siteId)
    {
        Id = block.Id;
        Name = block.Name;
        Num = block.Num;
        IsEnabled = block.IsEnabled;
        ImagesCount = block.ImagesCount;
        Jsonb = block.Jsonb!=null ? JsonDocument.Parse(block.Jsonb) : null;
        Type = block.Type;
        if (ImagesCount == 0) return;
        ImagesUrls = [];
        for (int i = 0; i < block.ImagesCount; i++)
        {
            ImagesUrls.Add($"https://s3.stk8s.66bit.ru/nyashdev/{siteId}/{block.PageId}/{block.Id}/{i+1}");
        }
    }

    public long Id { get; set; }

    public string Name { get; set; }

    public int Num { get; set; }

    public bool IsEnabled { get; set; }

    public int ImagesCount { get; set; }

    public JsonDocument? Jsonb { get; set; }

    public string Type { get; set; }
   
    public List<string>? ImagesUrls { get; set; }
}
