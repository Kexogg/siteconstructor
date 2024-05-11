using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SiteConstructor.Domain.Entities;

public class SiteEntity
{
    [ForeignKey("User")]
    public long Id { get; set; }
    public UserEntity User { get; set; }  = null!;

    public virtual ICollection<PageEntity> Pages { get; set; } = new List<PageEntity>();
}