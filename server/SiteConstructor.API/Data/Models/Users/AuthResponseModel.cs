using System.Text.Json.Serialization;

namespace server.Data.Models.Users;

public class AuthResponseModel
{
        [JsonPropertyName("token")]
        public required string Token { get; set; }
}