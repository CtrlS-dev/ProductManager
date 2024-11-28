using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ProductManager.Models
{
    public class Product
    {
        // Llave primaria
        [Key]
        // Longitud de la cadena
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
        // Longitud de la cadena
        [StringLength(200)]
        public required string ProductDescription { get; set; }

        // Cantidad de productos
        [Required]
        //Range hace que la cantidad no pueda ser negativa
        [Range(0, int.MaxValue, ErrorMessage = "El stock no puede ser negativo.")]
        public int Stock { get; set; }


        // Precio unitario
        [Required]
        // Precision hace que se guarden hasta 2 decimales
        [Precision(18, 2)]
        //Range hace que el precio no pueda ser negativo y que sea mayor que 0
        [Range(0.01, double.MaxValue, ErrorMessage = "El precio debe ser mayor que 0.")]
        public decimal Price { get; set; }

        // Flag de descuento
        [Required]
        public char HaveECDiscount { get; set; }

        // Flag de estado
        [Required]
        public char IsActive { get; set; }
    }
}
