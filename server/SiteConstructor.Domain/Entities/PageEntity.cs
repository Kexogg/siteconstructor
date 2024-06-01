using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SiteConstructor.Domain.Entities;

public class PageEntity : BaseEntity
{
    [ForeignKey("Site")]
    public long SiteId { get; set; }
    public required SiteEntity Site { get; set; }
    
    public int Num { get; set; }
    
    public string Address { get; set; }
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public bool IsEnabled { get; set; }

    public virtual ICollection<BlockEntity> Blocks { get; set; } = new List<BlockEntity>();
}