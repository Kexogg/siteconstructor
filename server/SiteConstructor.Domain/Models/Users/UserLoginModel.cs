namespace SiteConstructor.Domain.Models.Users;

public class UserLoginModel
{
    public required string Login { get; set; }
    
    public required string Password { get; set; }
}