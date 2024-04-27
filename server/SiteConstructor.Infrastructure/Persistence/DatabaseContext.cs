using Microsoft.EntityFrameworkCore;
using SiteConstructor.Domain.Entities;

namespace SiteConstructor.Infrastructure.Persistence;

public class DatabaseContext : DbContext
{
    public DbSet<UserEntity?> Users { get; set; } = null!;
    
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
        Database.Migrate();
    }
}