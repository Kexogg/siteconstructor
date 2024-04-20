using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using server.Data.Entities;

namespace server.Data;

public class DatabaseContext : DbContext
{
    public DbSet<UserEntity?> Users { get; set; } = null!;
    
    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
        Database.Migrate();
    }
}