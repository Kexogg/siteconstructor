namespace SiteConstructor.Domain.Entities;

public class UserEntity : BaseEntity
{
    public string Login { get; set; }
    
    public string Password { get; set; }
    
    public string? OrgName { get; set; }
}