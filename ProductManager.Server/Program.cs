using Microsoft.EntityFrameworkCore;
using ProductManager.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Configuración de la base de datos

//Definir la cadena de conexión
var connectionString = builder.Configuration.GetConnectionString("Connection");

// Configurar el servicio de base de datos
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));

// Agregar el servicio de controladores
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(builder =>
    builder.WithOrigins("https://localhost:56196")
           .AllowAnyMethod()
           .AllowAnyHeader());

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
