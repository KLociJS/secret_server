using Microsoft.EntityFrameworkCore;
using SecretApi.Contexts;
using SecretApi.Models;
using SecretApi.Models.RequestDto;
using SecretApi.Models.ResponseDto;
using SecretApi.Models.ResultModels;

namespace SecretApi.Services;

public class SecretService : ISecretService
{
    private readonly AppDataContext _appDataContext;
    private readonly ICryptographicService _cryptographicService;
    public SecretService(AppDataContext appDataContext, ICryptographicService cryptographicService)
    {
        _appDataContext = appDataContext;
        _cryptographicService = cryptographicService;
    }


    public async Task<CreateSecretResult> CreateSecretAsync(SecretRequestDto secretRequestDto)
    {
        try
        {
            var currentTimestamp = DateTime.UtcNow;
            var secret = new Secret
            {
                Hash = Guid.NewGuid().ToString(),
                SecretText = _cryptographicService.Encrypt(secretRequestDto.Secret!),
                CreatedAt = currentTimestamp,
                ExpiresAt = currentTimestamp.AddMinutes((double)secretRequestDto.ExpireAfter!),
                RemainingViews = (int)secretRequestDto.ExpireAfterViews!
            };

            await _appDataContext.Secrets.AddAsync(secret);
            await _appDataContext.SaveChangesAsync();

            secret.SecretText = secretRequestDto.Secret!;

            return new CreateSecretResult
            {
                Succeeded = true,
                Data = Secret.ToSecretResponseDto(secret)
            };

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
            var secret = await _appDataContext.Secrets.FirstOrDefaultAsync(s => s.Hash == hash);
            var result = new GetSecretResult();
            var isSecretValid = ValidateSecret(secret);
            
            if (!isSecretValid)
            {
                var errorResponse = new ErrorResponse
                {
                    Error = "Secret not found"
                };
                
                result.Error = errorResponse;
                return result;
            }

            secret!.RemainingViews--;
            await _appDataContext.SaveChangesAsync();

            secret.SecretText = _cryptographicService.Decrypt(secret.SecretText);
            
            result.Succeeded = true;
            result.Data = Secret.ToSecretResponseDto(secret);

            return result;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    private static bool ValidateSecret(Secret? secret)
    {
        if(secret == null)
        {
            return false;
        }
        
        return secret.RemainingViews > 0 && (secret.ExpiresAt >= DateTime.UtcNow || secret.ExpiresAt == secret.CreatedAt);
    }

}