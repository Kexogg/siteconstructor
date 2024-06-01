using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Models.Blocks;

public class BlockResponseModel(BlockEntity block)
{
    public long Id { get; set; } = block.Id;

    public int Num { get; set; } = block.Num;

    public bool IsEnabled { get; set; } = block.IsEnabled;

    public string Jsonb { get; set; } = block.Jsonb;

    public string Type { get; set; } = block.Type;
}