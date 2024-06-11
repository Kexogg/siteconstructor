namespace SiteConstructor.Services.Services.Abstract;

public interface IBucketService
{
    public void PutLogoAsync(long siteId, Stream file );
}