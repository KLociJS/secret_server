using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using SecretApi.Models;

namespace SecretApi.Contexts;

public class AppDataContext : DbContext
{
    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
    {
    }
    
    public DbSet<Secret> Secrets {get; set;}
}