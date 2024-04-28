using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using SiteConstructor.Domain.Entities;

namespace server.Helpers;


public class TokenHelper
{
    public static string GetToken(UserEntity user)
    {
        var userId = user.Id.ToString();
        var claims = new List<Claim>
        {
            new Claim("id", userId)
        };
        
        var jwt = new JwtSecurityToken(
            issuer: AuthOptions.ISSUER,
            audience: AuthOptions.AUDIENCE,
            claims: claims,
            expires: DateTime.UtcNow.Add(TimeSpan.FromHours(24)),
            signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), 
                SecurityAlgorithms.HmacSha256));
        
        var token = new JwtSecurityTokenHandler().WriteToken(jwt);
        
        return token;
    }
}