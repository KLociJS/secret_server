using Microsoft.EntityFrameworkCore;
using SecretApi.Contexts;
using SecretApi.Models;
using SecretApi.Models.RequestDto;
using SecretApi.Models.ResponseDto;
using SecretApi.Models.ResultModels;

namespace SecretApi.Services;

public class SecretService : ISecretService
{
    public SecretService(AppDataContext appDataContext)
    {
        _appDataContext = appDataContext;
    }

    private readonly AppDataContext _appDataContext;

    public async Task<CreateSecretResult> CreateSecretAsync(SecretRequestDto secretRequestDto)
    {
        try
        {
            var currentTimestamp = DateTime.UtcNow;
            var secret = new Secret
            {
                Hash = Guid.NewGuid().ToString(),
                SecretText = secretRequestDto.Secret!,
                CreatedAt = currentTimestamp,
                ExpiresAt = currentTimestamp.AddMinutes((double)secretRequestDto.ExpireAfter!),
                RemainingViews = (int)secretRequestDto.ExpireAfterViews!
            };

            await _appDataContext.Secrets.AddAsync(secret);
            await _appDataContext.SaveChangesAsync();

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