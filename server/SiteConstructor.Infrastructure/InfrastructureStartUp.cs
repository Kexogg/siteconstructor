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
        var dbHost = Environment.GetEnvironmentVariable("DATABASE_HOST");
        var dbPassword = Environment.GetEnvironmentVariable("DATABASE_PASSWORD");
        serviceCollection.AddDbContext<DatabaseContext>(options =>
        {
            options.UseNpgsql(configuration.GetConnectionString("DefaultConnection") + $"Host={dbHost};" + $"Password={dbPassword};");
        }, ServiceLifetime.Transient);
        
        serviceCollection.AddScoped<IUsersRepository, UsersRepository>();

        
        return serviceCollection;
    }
}