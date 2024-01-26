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
    public async Task<IActionResult> GetSecret(string hash)
    {
        try
        {
            var result = await _secretService.GetSecretByHash(hash);

            if (result.Succeeded)
            {
                return Ok(result.Data);
            }
            
            var errorResponse = new ErrorResponse()
            {
                Message = result.Message!
            };
            
            return NotFound(errorResponse);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            
            var errorResponse = new ErrorResponse()
            {
                Message = "Server error"
            };
            
            return StatusCode(500, errorResponse);
        }
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateSecret([FromForm]SecretRequestDto secretRequestDto)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                var invalidInputError = new ErrorResponse()
                {
                    Message = "Invalid input"
                };
                
                return BadRequest();
            }
            
            var result = await _secretService.CreateSecretAsync(secretRequestDto);
            
            return Ok(result.Data);
            
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            
            var errorResponse = new ErrorResponse()
            {
                Message = "Server error"
            };
            
            return StatusCode(500, errorResponse);
        }
    }
    
}