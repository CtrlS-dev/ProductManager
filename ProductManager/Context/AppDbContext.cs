using Microsoft.EntityFrameworkCore;
using ProductManager.Models;

namespace ProductManager.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Representación de las tablas en la base de datos
        public required DbSet<Product> Products { get; set; }
        public required DbSet<ProductCategory> ProductCategories { get; set; }
    }
}
