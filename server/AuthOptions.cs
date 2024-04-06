using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace server;

public class AuthOptions
{
        public const string ISSUER = "Server";
        public const string AUDIENCE = "User";
        const string KEY = "Ashg31jh32gg3jhjhh23bb3bbjj23gg1j3g23gj1g3j1g3g13bj6k79lj3bj23jhj";
        public static SymmetricSecurityKey GetSymmetricSecurityKey() => 
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
}