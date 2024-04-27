namespace server.Data.Models.Users;

public class UserLoginModel
{
    public required string Login { get; set; }
    
    public required string Password { get; set; }
}