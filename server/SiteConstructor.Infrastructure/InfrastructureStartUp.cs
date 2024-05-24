using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SiteConstructor.Domain.Repositories;
using SiteConstructor.Infrastructure.Persistence;
using SiteConstructor.Infrastructure.Repositories;

namespace SiteConstructor.Infrastructure;

public static class InfrastructureStartUp
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection serviceCollection,
        IConfiguration configuration)
    {
        string databaseConnection;
        var myDb1ConnectionString = configuration.GetConnectionString("Development");
        if (!string.IsNullOrEmpty(myDb1ConnectionString))
        {
            databaseConnection = myDb1ConnectionString;
        }
        else
        {
            var dbUser = Environment.GetEnvironmentVariable("DB_USER");
            var dbPassword = Environment.GetEnvironmentVariable("DB_PASSWORD");
            var dbName = Environment.GetEnvironmentVariable("DB_NAME");
            var dbHost = Environment.GetEnvironmentVariable("DB_HOST");
            var dbPort = Environment.GetEnvironmentVariable("DB_PORT");
        
            if (string.IsNullOrEmpty(dbUser) || string.IsNullOrEmpty(dbPassword) || string.IsNullOrEmpty(dbName) ||
                string.IsNullOrEmpty(dbHost) || string.IsNullOrEmpty(dbPort))
            {
                throw new Exception("Database connection string is not set");
            }
        
            databaseConnection = $"Database={dbName};Host={dbHost};Port={dbPort};Username={dbUser};Password={dbPassword}";
        }
        
        
        serviceCollection.AddDbContext<DatabaseContext>(options =>
        {
            options.UseNpgsql(databaseConnection);
        }, ServiceLifetime.Transient);
        
        serviceCollection.AddScoped<IUsersRepository, UsersRepository>();
        serviceCollection.AddScoped<ISitesRepository, SitesRepository>();
        serviceCollection.AddScoped<IPagesRepository, PagesRepository>();
        
        return serviceCollection;
    }
}