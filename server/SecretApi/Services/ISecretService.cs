using SecretApi.Models.RequestDto;
using SecretApi.Models.ResultModels;

namespace SecretApi.Services;

public interface ISecretService
{
    Task<CreateSecretResult> CreateSecretAsync(SecretRequestDto secretRequestDto);
    Task<GetSecretResult> GetSecretByHash(string hash);
}