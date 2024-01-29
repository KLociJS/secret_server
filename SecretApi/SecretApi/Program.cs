using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SecretApi.Contexts;
using SecretApi.Services;
using SecretApi.Utils;

var builder = WebApplication.CreateBuilder(args);
var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");


// Apply cors policy
var  myAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
        policy  =>
        {
            policy.WithOrigins("http://localhost:3000", "http://3.79.241.113/")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        });
});

// Add services to the container.
builder.Services.AddDbContext<AppDataContext>(
    options => options.UseNpgsql(connectionString!)
    );

builder.Services.AddScoped<ISecretService, SecretService>();
builder.Services.AddScoped<ICryptographicService, CryptographicService>();

// Add xml support
builder.Services.AddControllers()
    .AddXmlDataContractSerializerFormatters();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.Configure<ApiBehaviorOptions>(options =>
{
    options.InvalidModelStateResponseFactory = context => new ValidationProblemDetailsResult();
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Apply cors policy
app.UseCors(myAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

// Migrate database on startup
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    
    var context = services.GetRequiredService<AppDataContext>();
    context.Database.Migrate();
}

app.Run();