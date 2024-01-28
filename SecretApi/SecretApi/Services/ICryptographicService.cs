namespace SecretApi.Services;

public interface ICryptographicService
{
    string Encrypt(string encryptString);
    string Decrypt(string cipherText);
}