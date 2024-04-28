using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SiteConstructor.Domain.Entities;

public class PageEntity : BaseEntity
{
    [ForeignKey("Site")]
    public long SiteId { get; set; }
    public required SiteEntity Site { get; set; }
    
    public int PageNum { get; set; }
    
    public bool IsEnabled { get; set; }
    
    public IList<BlockEntity> Blocks { get; set; }
}