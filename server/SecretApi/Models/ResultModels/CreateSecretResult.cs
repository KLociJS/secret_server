using SecretApi.Models.ResponseDto;

namespace SecretApi.Models.ResultModels;

public class CreateSecretResult
{
    public bool Succeeded { get; set; }
    public ErrorResponse? Error { get; set; }
    public SecretResponseDto? Data { get; set; }
    
    // Create success result
    public static CreateSecretResult Success(SecretResponseDto secretResponseDto)
    {
        return new CreateSecretResult
        {
            Succeeded = true,
            Data = secretResponseDto
        };
    }
}