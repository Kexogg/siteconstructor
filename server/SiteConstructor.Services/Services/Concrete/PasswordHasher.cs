using System.Security.Cryptography;
using System.Text;
using SiteConstructor.Services.Services.Abstract;

namespace SiteConstructor.Services.Services.Concrete;

public class PasswordHasher : IPasswordHasher
{
    public string Hash(string password)
    {
        return Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(password)));
    }
    
    public bool Verify(string inputPassword, string hashedPassword)
    {
        var password = Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(inputPassword)));
        return password.Equals(hashedPassword);
    }
}