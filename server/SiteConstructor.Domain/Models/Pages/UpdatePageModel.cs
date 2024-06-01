namespace SiteConstructor.Domain.Models.Pages;

public class UpdatePageModel
{
    public string Address { get; set; } = null!;
    public string Name { get; set; } = null!;

    public string? Description { get; set; }
    public bool IsEnabled { get; set; }
}