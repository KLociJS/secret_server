using System.Security.Cryptography;
using System.Text;

namespace SecretApi.Services;

public class CryptographicService : ICryptographicService
{
    
    // Key used for encryption.
    private readonly string _encryptionKey;

    public CryptographicService()
    {
        _encryptionKey = Environment.GetEnvironmentVariable("ENCRYPTION_KEY")!;
        
        if (string.IsNullOrEmpty(_encryptionKey))
        {
            throw new Exception("Encryption key is not set");
        }
    }

    public string Encrypt(string plainText)
{
    // Convert the string to bytes using Unicode encoding
    var plainBytes = Encoding.Unicode.GetBytes(plainText);
    
    // Create an AES encryption algorithm instance
    using(var aesEncryptor = Aes.Create())
    {
        // Derive key and initialization vector (IV) from the encryption key and a salt
        var keyDerivationBytes = new Rfc2898DeriveBytes(_encryptionKey, new byte[] {
            0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76
        });
        aesEncryptor.Key = keyDerivationBytes.GetBytes(32);
        aesEncryptor.IV = keyDerivationBytes.GetBytes(16);
        
        // Encrypt the data using a CryptoStream
        using(var memoryStream = new MemoryStream())
        {
            using(var cryptoStream = new CryptoStream(memoryStream, aesEncryptor.CreateEncryptor(), CryptoStreamMode.Write)) {
                cryptoStream.Write(plainBytes, 0, plainBytes.Length);
                cryptoStream.Close();
            }
            // Convert the encrypted bytes to a base64-encoded string
            plainText = Convert.ToBase64String(memoryStream.ToArray());
        }
    }
    // Return the encrypted string
    return plainText;
}

public string Decrypt(string cipherText)
{
    // Replace spaces with '+' in case of URL-encoded base64 string
    cipherText = cipherText.Replace(" ", "+");

    // Convert the base64-encoded string to bytes
    var cipherBytes = Convert.FromBase64String(cipherText);
    
    // Create an AES encryption algorithm instance
    using(var aesDecryptor = Aes.Create())
    {
        // Derive key and initialization vector (IV) from the encryption key and a salt
        var keyDerivationBytes = new Rfc2898DeriveBytes(_encryptionKey, new byte[] {
            0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76
        });
        aesDecryptor.Key = keyDerivationBytes.GetBytes(32);
        aesDecryptor.IV = keyDerivationBytes.GetBytes(16);
        
        // Decrypt the data using a CryptoStream
        using(var memoryStream = new MemoryStream())
        {
            using(var cryptoStream = new CryptoStream(memoryStream, aesDecryptor.CreateDecryptor(), CryptoStreamMode.Write)) {
                cryptoStream.Write(cipherBytes, 0, cipherBytes.Length);
                cryptoStream.Close();
            }
            // Convert the decrypted bytes to a Unicode string
            cipherText = Encoding.Unicode.GetString(memoryStream.ToArray());
        }
    }
    // Return the decrypted string
    return cipherText;
}
}