using System.ComponentModel.DataAnnotations;

namespace SecretApi.Models;

public class Secret
{
    [Key]
    public string Hash { get; set; } = string.Empty;
    public string SecretText { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiresAt { get; set; }
    public int RemainingViews { get; set; }
}