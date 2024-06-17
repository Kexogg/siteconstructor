using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.IdentityModel.Tokens;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class BucketService : IBucketService
{
    private static readonly BasicAWSCredentials Credentials = new("nyashdev", "nyashdev");

    private static readonly AmazonS3Config Config = new()
    {
        ServiceURL = "https://s3.stk8s.66bit.ru",
        ForcePathStyle = true
    };

    private readonly AmazonS3Client _client = new(Credentials, Config);

    public async void PutLogoAsync(long siteId, Stream file)
    {
        var request = new PutObjectRequest
        {
            BucketName = "nyashdev",
            Key = $"{siteId}/logo.jpg",
            InputStream = file,
            CannedACL = S3CannedACL.PublicRead
        };
        
        await _client.PutObjectAsync(request);
    }

    public async void DeleteSiteFolderAsync(long siteId)
    {
        DeleteObjectsRequest deleteRequest = new()
        {
            BucketName = "nyashdev"
        };
        var request = new ListObjectsRequest
        {
            BucketName = "nyashdev",
            Prefix = $"{siteId}"
        };
        var response = await _client.ListObjectsAsync(request);
        if (response.S3Objects.IsNullOrEmpty()) return;
        foreach (var obj in response.S3Objects)
        {
            deleteRequest.AddKey(obj.Key);
        }
        
        await _client.DeleteObjectsAsync(deleteRequest);
    }

    public async Task<ListObjectsResponse> PutPhotosAsync(long siteId, long pageId, long blockId, int imagesCount, List<Stream> files)
    {
        for (int i = 0; i < files.Count; i++)
        {
            var request = new PutObjectRequest
            {
                BucketName = "nyashdev",
                Key = $"{siteId}/{pageId}/{blockId}/{imagesCount+i+1}.jpg",
                InputStream = files[i],
                CannedACL = S3CannedACL.PublicRead
            };
        
            await _client.PutObjectAsync(request);
        }
        

        return await GetPhotosAsync(siteId, pageId, blockId);
    }

    public async void ReplacePhotoAsync(long siteId, long pageId, long blockId, int imageId, Stream image)
    {
        var request = new PutObjectRequest
        {
            BucketName = "nyashdev",
            Key = $"{siteId}/{pageId}/{blockId}/{imageId}.jpg",
            InputStream = image,
            CannedACL = S3CannedACL.PublicRead
        };
        
        await _client.PutObjectAsync(request);
    }

    public async Task<ListObjectsResponse> GetPhotosAsync(long siteId, long pageId, long blockId)
    {
        var objectsRequest = new ListObjectsRequest
        {
            BucketName = "nyashdev",
            Prefix = $"{siteId}/{pageId}/{blockId}"
        };

        return await _client.ListObjectsAsync(objectsRequest);
    }
}