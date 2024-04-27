using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SiteConstructor.Domain.Entities;

public class SiteEntity
{
    [Key]
    [ForeignKey("User")]
    public long UserId { get; set; }
    public required UserEntity User { get; set; }
    
    public IList<PageEntity> Pages { get; set; }
}