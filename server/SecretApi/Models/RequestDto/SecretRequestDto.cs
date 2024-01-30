using System.ComponentModel.DataAnnotations;

namespace SecretApi.Models.RequestDto;

public class SecretRequestDto
{
    [Required]
    public string? Secret { get; set; }
    [Range(1,int.MaxValue)]
    [Required]
    public int? ExpireAfterViews { get; set; }
    [Range(0,int.MaxValue)]
    [Required]
    public int? ExpireAfter { get; set; }
}