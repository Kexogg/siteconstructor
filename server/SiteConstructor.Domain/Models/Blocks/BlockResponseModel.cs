using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Domain.Models.Blocks;

public class BlockResponseModel
{
    public BlockResponseModel(BlockEntity block)
    {
        Id = block.Id;
        Num = block.Num;
        IsEnabled = block.IsEnabled;
        Jsonb = block.Jsonb;
    }
    public long Id { get; set; }
    
    public int Num { get; set; }
    
    public bool IsEnabled { get; set; }
    
    public string Jsonb { get; set; }
}