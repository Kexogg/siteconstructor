using System.Text.Json;
using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Models.Blocks;

public class BlockResponseModel(BlockEntity block)
{
    public long Id { get; set; } = block.Id;

    public string Name { get; set; } = block.Name;

    public int Num { get; set; } = block.Num;

    public bool IsEnabled { get; set; } = block.IsEnabled;

    public JsonDocument? Jsonb { get; set; } = block.Jsonb!=null ? JsonDocument.Parse(block.Jsonb) : null;

    public string Type { get; set; } = block.Type;
}