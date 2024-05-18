namespace SiteConstructor.Domain.Models.Blocks;

public class AddBlockModel
{
    public bool IsEnabled { get; set; }
    
    public required string Jsonb { get; set; }
}