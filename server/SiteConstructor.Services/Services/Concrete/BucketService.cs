using Amazon.Runtime;
using Amazon.S3;
using Amazon.S3.Model;
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
}