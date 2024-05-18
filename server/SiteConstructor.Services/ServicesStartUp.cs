using Microsoft.Extensions.DependencyInjection;
using SiteConstructor.Services.Services.Abstract;
using SiteConstructor.Services.Services.Concrete;

namespace server;

public static class ServicesStartUp
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection serviceCollection)
    {
        serviceCollection.AddScoped<IUserService, UserService>();
        serviceCollection.AddScoped<ISiteService, SiteService>();
        serviceCollection.AddScoped<IPageService, PageService>();
        serviceCollection.AddScoped<IBlockService, BlockService>();
        return serviceCollection;
    }
}