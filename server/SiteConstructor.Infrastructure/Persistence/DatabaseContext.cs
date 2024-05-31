using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Infrastructure.Persistence;

public sealed class DatabaseContext : DbContext
{
    public DbSet<UserEntity> Users { get; set; }
    public DbSet<SiteEntity> Sites { get; set; }
    public DbSet<PageEntity> Pages { get; set; }
    public DbSet<BlockEntity> Blocks { get; set; }
    
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
        //reset db
        Database.EnsureDeleted();
        Database.Migrate();
        Database.EnsureCreated();
    }
}