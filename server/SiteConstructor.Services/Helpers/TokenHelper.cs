using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using SiteConstructor.Domain.Entities;

namespace server.Helpers;


public class TokenHelper
{
    public static ClaimsIdentity GetToken(UserEntity user)
    {
        var userId = user.Id.ToString();
        var claims = new List<Claim>
        {
            new("id", userId)
        };
        
        
        var claimsIdentity = new ClaimsIdentity(claims, "Cookie");
        
        return claimsIdentity;
    }
}