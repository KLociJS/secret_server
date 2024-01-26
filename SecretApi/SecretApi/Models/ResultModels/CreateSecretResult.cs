using SecretApi.Models.ResponseDto;

namespace SecretApi.Models.ResultModels;

public class CreateSecretResult
{
    public bool Succeeded { get; set; }
    public string? Message { get; set; }
    public SecretResponseDto? Data { get; set; }
}