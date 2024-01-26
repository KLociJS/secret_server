using SecretApi.Models.ResponseDto;

namespace SecretApi.Models.ResultModels;

public class GetSecretResult
{
    public bool Succeeded { get; set; }
    public ErrorResponse? Error { get; set; }
    public SecretResponseDto? Data { get; set; }
}