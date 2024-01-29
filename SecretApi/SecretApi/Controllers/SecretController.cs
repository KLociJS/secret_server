using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;
using SecretApi.Models.RequestDto;
using SecretApi.Models.ResponseDto;
using SecretApi.Services;

namespace SecretApi.Controllers;

[ApiController]
[Route("[controller]")]
public class SecretController : ControllerBase
{
    private readonly ISecretService _secretService;

    public SecretController( ISecretService secretService)
    {
        _secretService = secretService;
    }

    [HttpGet("{hash}")]
    [Produces(MediaTypeNames.Application.Json, new string[]{ MediaTypeNames.Application.Xml})]
    public async Task<IActionResult> GetSecret(string hash)
    {
        try
        {
            // Get secret by hash
            var result = await _secretService.GetSecretByHash(hash);
            
            // Check if operation succeeded
            if (result.Succeeded)
            {
                return Ok(result.Data);
            }
            
            // Return error response if operation failed
            return NotFound(result.Error);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);

            var errorResponse = ErrorResponse.Create("Server error");
            return StatusCode(500, errorResponse);
        }
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateSecret([FromForm]SecretRequestDto secretRequestDto)
    {
        try
        {
            // Validate request happens automatically, if not valid sending 405 HTTP status code
            
            // Create secret
            var result = await _secretService.CreateSecretAsync(secretRequestDto);
            // Return secret in response
            return Ok(result.Data);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);

            var errorResponse = ErrorResponse.Create("Server error");
            return StatusCode(500, errorResponse);
        }
    }
    
}