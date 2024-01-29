namespace SecretApi.Models.ResponseDto;

public class ErrorResponse
{
    public string Error { get; set; } = String.Empty;
    
    public static ErrorResponse Create(string error)
    {
        return new ErrorResponse
        {
            Error = error
        };
    }
}