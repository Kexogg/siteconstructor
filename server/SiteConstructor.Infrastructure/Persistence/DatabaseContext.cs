using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Infrastructure.Persistence;

public class DatabaseContext : DbContext
{
    public DbSet<UserEntity> Users { get; set; } = null!;
    public DbSet<SiteEntity> Sites { get; set; } = null!;
    public DbSet<PageEntity> Pages { get; set; } = null!;
    public DbSet<BlockEntity> Blocks { get; set; } = null!;
    
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }
}