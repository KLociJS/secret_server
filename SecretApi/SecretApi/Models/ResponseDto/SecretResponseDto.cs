namespace SecretApi.Models.ResponseDto;

public class SecretResponseDto
{
    public string Hash { get; set; } = string.Empty;
    public string SecretText { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiresAt { get; set; }
    public int RemainingViews { get; set; }
    
    // Create success result
    public static SecretResponseDto Create(Secret secret)
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