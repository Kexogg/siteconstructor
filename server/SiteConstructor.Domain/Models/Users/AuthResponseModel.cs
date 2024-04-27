using System.Text.Json.Serialization;

namespace SiteConstructor.Domain.Models.Users;

public class AuthResponseModel
{
        [JsonPropertyName("token")]
        public required string Token { get; set; }
}