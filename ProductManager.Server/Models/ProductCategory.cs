using System.ComponentModel.DataAnnotations;

namespace ProductManager.Models
{
    public class ProductCategory
    {
        // Llave primaria.
        [Key]
        public required int CategoryProductId { get; set; }

        // Descripción de la categoría
        [Required]
        // Maximo de caracteres
        [StringLength(200)]
        public required string CategoryDescription { get; set; }

        // Flag que indica si está activo.
        [Required]
        public char IsActive { get; set; }
    }
}