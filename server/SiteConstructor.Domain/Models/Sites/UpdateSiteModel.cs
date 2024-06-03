namespace SiteConstructor.Domain.Models.Sites;

public class UpdateSiteModel
{
    public string SiteAddress { get; set; }
    
    public string SiteName { get; set; }
    public string? Styles { get; set; }
}