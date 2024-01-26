using Microsoft.AspNetCore.Mvc;

namespace SecretApi.Utils;

public class ValidationProblemDetailsResult : IActionResult
{
    public async Task ExecuteResultAsync(ActionContext context)
    {
        var problemDetails = new 
        {
            Error = "Invalid input"
        };
        
        var objectResult = new ObjectResult(problemDetails) { StatusCode = 405};
        await objectResult.ExecuteResultAsync(context);
    }
}