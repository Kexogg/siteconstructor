using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SiteConstructor.Domain.Entities;

public class BlockEntity : BaseEntity
{
    [ForeignKey("Page")]
    public long PageId { get; set; }
    public required PageEntity Page { get; set; }
    
    public string Name { get; set; }
    
    public int Num { get; set; }
    
    public bool IsEnabled { get; set; }
    [Column(TypeName = "jsonb")]
    public string? Jsonb { get; set; }
    
    public string Type { get; set; }
}