using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ProductManager.Models
{
    public class Product
    {
        // Llave primaria
        [Key]
        [StringLength(30)]
        public required string ProductId { get; set; }

        // Llave foránea
        [Required]
        public int CategoryProductId { get; set; }

        // Relación con 'ProductCategory'
        [ForeignKey("CategoryProductId")]
        public required ProductCategory ProductCategory { get; set; }

        // Descripción del producto
        [Required]
        [StringLength(200)]
        public required string ProductDescription { get; set; }

        // Cantidad de productos
        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "El stock no puede ser negativo.")]
        public int Stock { get; set; }


        // Precio unitario
        [Required]
        [Precision(18, 2)]
        public decimal Price { get; set; }

        // Flag de descuento
        [Required]
        //[StringLength(1)]
        public char HaveECDiscount { get; set; }

        // Flag de estado
        [Required]
        //[StringLength(1)]
        public char IsActive { get; set; }
    }
}
