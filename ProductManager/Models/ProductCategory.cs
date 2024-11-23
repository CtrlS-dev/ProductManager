using System.ComponentModel.DataAnnotations;

namespace ProductManager.Models
{
    public class ProductCategory
    {
        // Llave primaria.
        [Key]
        public int CategoryProductId { get; set; }

        // Descripción de la categoría.
        [Required]
        [StringLength(200)]
        public required string CategoryDescription { get; set; }

        // Flag que indica si está activo.
        [Required]
        //[StringLength(1)]
        public char IsActive { get; set; } 
    }
}
