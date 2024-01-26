namespace SecretApi.Models.ResponseDto;

public class SecretResponseDto
{
    public string Hash { get; set; } = string.Empty;
    public string SecretText { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiresAt { get; set; }
    public int RemainingViews { get; set; }
}