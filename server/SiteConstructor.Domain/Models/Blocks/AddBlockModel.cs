namespace SiteConstructor.Domain.Models.Blocks;

public class AddBlockModel
{
    public string Name { get; set; }
    public bool IsEnabled { get; set; }
    
    public required string Jsonb { get; set; }
}