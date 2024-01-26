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
    
    public static SecretResponseDto ToSecretResponseDto(Secret secret)
    {
        return new SecretResponseDto
        {
            Hash = secret.Hash,
            SecretText = secret.SecretText,
            CreatedAt = secret.CreatedAt,
            ExpiresAt = secret.ExpiresAt,
            RemainingViews = secret.RemainingViews
        };
    }
}