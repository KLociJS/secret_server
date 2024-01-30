using SecretApi.Models.ResponseDto;

namespace SecretApi.Models.ResultModels;

public class GetSecretResult
{
    public bool Succeeded { get; set; }
    public ErrorResponse? Error { get; set; }
    public SecretResponseDto? Data { get; set; }
    
    // Create success result
    public static GetSecretResult Success(SecretResponseDto secretResponseDto)
    {
        return new GetSecretResult
        {
            Succeeded = true,
            Data = secretResponseDto
        };
    }
    
    // Create error result
    public static GetSecretResult Fail(ErrorResponse errorResponse)
    {
        return new GetSecretResult
        {
            Succeeded = false,
            Error = errorResponse
        };
    }
}