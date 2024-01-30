using System.ComponentModel.DataAnnotations;
using SecretApi.Models.ResponseDto;

namespace SecretApi.Models;

public class Secret
{
    [Key]
    public string Hash { get; set; } = string.Empty;
    public string SecretText { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiresAt { get; set; }
    public int RemainingViews { get; set; }
    
    public static Secret Create(string secretText, int expireAfter, int expireAfterViews)
    {
        var currentTimestamp = DateTime.UtcNow;
        
        return new Secret
        {
            Hash = Guid.NewGuid().ToString(),
            SecretText = secretText,
            CreatedAt = currentTimestamp,
            ExpiresAt = currentTimestamp.AddMinutes((double)expireAfter),
            RemainingViews = expireAfterViews
        };
    }
}