namespace SiteConstructor.Domain.Models.Users;

public class UserRegisterModel
{
    public required string Login { get; set; }
    
    public required string Password { get; set; }
    
    public required string OrgName { get; set; }
}