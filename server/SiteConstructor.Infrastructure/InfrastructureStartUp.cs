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
        string databaseConnection =
            "Database = site_constructor;Host = localhost;Port = 5432;Username=postgres;Password=Shary221";
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