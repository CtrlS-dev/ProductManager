using Microsoft.EntityFrameworkCore;
using ProductManager.Models;

// Contexto de la base de datos

namespace ProductManager.Context
{
    public class AppDbContext : DbContext
    {
        // Constructor de la clase para inicializar la base de datos
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Representación de las tablas en la base de datos
        public required DbSet<Product> Products { get; set; }
        public required DbSet<ProductCategory> ProductCategories { get; set; }
    }
}
