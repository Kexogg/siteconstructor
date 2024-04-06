using System.Runtime.Intrinsics.Arm;
using System.Security.Cryptography;
using System.Text;
using server.Services.Abstract;

namespace server.Services.Concrete;

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