using Microsoft.EntityFrameworkCore;
using SecretApi.Contexts;
using SecretApi.Models;
using SecretApi.Models.RequestDto;
using SecretApi.Models.ResponseDto;
using SecretApi.Models.ResultModels;

namespace SecretApi.Services;

public class SecretService : ISecretService
{
    // Required services: DB, Cryptographic service
    private readonly AppDataContext _appDataContext;
    private readonly ICryptographicService _cryptographicService;
    
    // Inject services in constructor
    public SecretService(AppDataContext appDataContext, ICryptographicService cryptographicService)
    {
        _appDataContext = appDataContext;
        _cryptographicService = cryptographicService;
    }


    public async Task<CreateSecretResult> CreateSecretAsync(SecretRequestDto secretRequestDto)
    {
        try
        {
            // Create secret
            var secret = Secret.Create(
                secretRequestDto.Secret!,
                (int)secretRequestDto.ExpireAfter!,
                (int)secretRequestDto.ExpireAfterViews!
                );
            
            // Create secret response dto
            var secretResponseDto = SecretResponseDto.Create(secret);
            
            // Encrypt secret text
            secret.SecretText = _cryptographicService.Encrypt(secret.SecretText);
            
            // Save to database
            await _appDataContext.Secrets.AddAsync(secret);
            await _appDataContext.SaveChangesAsync();

            // Return success result with secret response dto
            return CreateSecretResult.Success(secretResponseDto);

        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public async Task<GetSecretResult> GetSecretByHash(string hash)
    {
        try
        {
            // Query secret by hash
            var secret = await _appDataContext.Secrets.FirstOrDefaultAsync(s => s.Hash == hash);
            
            // validate secret
            var isSecretValid = ValidateSecret(secret);
            
            // If secret not valid (not found, expired, views limit reached) return error response
            if (!isSecretValid)
            {
                var errorResponse = ErrorResponse.Create("Secret not found");
                return GetSecretResult.Fail(errorResponse);
            }

            // If secret valid, decrement remaining views and save to database
            secret!.RemainingViews--;
            await _appDataContext.SaveChangesAsync();

            // Decrypt secret text
            secret.SecretText = _cryptographicService.Decrypt(secret.SecretText);
            // return success result with secret response dto
            var secretResponseDto = SecretResponseDto.Create(secret);
            return GetSecretResult.Success(secretResponseDto);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    private static bool ValidateSecret(Secret? secret)
    {
        // If secret not found, return false
        if(secret == null)
        {
            return false;
        }
        // If secret expired or views limit reached, return false
        return secret.RemainingViews > 0 && (secret.ExpiresAt >= DateTime.UtcNow || secret.ExpiresAt == secret.CreatedAt);
    }

}