using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SiteConstructor.Domain.Entities;

public class BlockEntity : BaseEntity
{
    [ForeignKey("Page")]
    public long PageId { get; set; }
    public required PageEntity Page { get; set; }
    
    public int BlockNum { get; set; }
    
    public bool IsEnabled { get; set; }
    
    public required string JSONB { get; set; }
}