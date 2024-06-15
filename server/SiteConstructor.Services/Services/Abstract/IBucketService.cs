using Amazon.S3.Model;

namespace SiteConstructor.Services.Services.Abstract;

public interface IBucketService
{
    public void PutLogoAsync(long siteId, Stream file );

    public void DeleteSiteFolderAsync(long siteId);

    public Task<ListObjectsResponse> PutPhotosAsync(long siteId, long pageId, long blockId, List<Stream> files);

    public Task<ListObjectsResponse> GetPhotosAsync(long siteId, long pageId, long blockId);
}