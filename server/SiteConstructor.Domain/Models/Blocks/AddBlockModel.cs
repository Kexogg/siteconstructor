namespace SiteConstructor.Domain.Models.Blocks;

public class AddBlockModel
{
    public string Name { get; set; }
    public bool IsEnabled { get; set; }
    
    public string? Jsonb { get; set; }

    public string Type { get; set; } = null!;
}