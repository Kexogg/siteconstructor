using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SiteConstructor.Domain.Entities;

public class BlockEntity
{
    [ForeignKey("Page")]
    public long PageId { get; set; }
    public required PageEntity Page { get; set; }
    
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long BlockId { get; set; }
    
    public int BlockNum { get; set; }
    
    public bool IsEnabled { get; set; }
    
    public required string JSONB { get; set; }
}