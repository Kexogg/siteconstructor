using System.ComponentModel.DataAnnotations.Schema;

namespace SiteConstructor.Domain.Entities;

public class SiteEntity
{
    [ForeignKey("User")]
    public long Id { get; set; }
    public UserEntity User { get; set; }  = null!;
    
    public string SiteName { get; set; }
    
    [Column(TypeName = "jsonb")]
    public string? Styles { get; set; }
    public virtual ICollection<PageEntity> Pages { get; set; } = new List<PageEntity>();
}