using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductManager.Context;
using ProductManager.Models;

// Controller de la entidad ProductCategory para la API

namespace ProductManager.Server.Controllers
{

    // Controller de la entidad ProductCategory
    [Route("api/[controller]")]
    [ApiController]
    // La clase hereda de ControllerBase para manejar solicitudes HTTP
    public class ProductCategoriesController : ControllerBase
    {
        // Contexto para interactuar con la base de datos
        private readonly AppDbContext _context;

        // Constructor de la clase para inicializar el contexto
        public ProductCategoriesController(AppDbContext context)
        {
            _context = context;
        }

        // MÉTODOS
        //Obtener todas las ProductCategories
        // GET: api/ProductCategories
        [HttpGet]
        // Este método devuelve una lista de ProductCategories
        //Se devuelve el resultado que es una lista de ProductCategories
        public async Task<ActionResult<IEnumerable<ProductCategory>>> GetProductCategories()
        {
            return await _context.ProductCategories.ToListAsync();
        }

        // Obtener una ProductCategory por su id
        // GET: api/ProductCategories/5
        [HttpGet("{id}")]
        // Devuelve una ProductCategory por su id
        public async Task<ActionResult<ProductCategory>> GetProductCategory(int id)
        {
            // Buscar una ProductCategory por su id
            var productCategory = await _context.ProductCategories.FindAsync(id);

            // Si no se encuentra, devolver un NotFound
            if (productCategory == null)
            {
                return NotFound();
            }

            // Si se encuentra, devolver la ProductCategory en la respuesta
            return productCategory;
        }
        
        // Actualizar una categoría
        // PUT: api/ProductCategories/5
        [HttpPut("{id}")]
        // Actualiza una ProductCategory por su id
        public async Task<IActionResult> PutProductCategory(int id, ProductCategory productCategory)
        {
            // Si el id no coincide con la ProductCategory devolver un BadRequest
            if (id != productCategory.CategoryProductId)
            {
                return BadRequest();
            }

            // Actualizar la ProductCategory
            _context.Entry(productCategory).State = EntityState.Modified;


            // Guardar los cambios
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Si la ProductCategory no se encuentra, devolver un NotFound
                if (!ProductCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    // si se encuentra, devolver el error
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductCategories
        // Crear una nueva categoria
        [HttpPost]
        public async Task<ActionResult<ProductCategory>> PostProductCategory(ProductCategory productCategory)

        {
            _context.ProductCategories.Add(productCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductCategory", new { id = productCategory.CategoryProductId }, productCategory);
        }

        // DELETE: api/ProductCategories/5
        [HttpDelete("{id}")]
        // Elimina una categora por su id
        public async Task<IActionResult> DeleteProductCategory(int id)
        {
            // Buscar una ProductCategory por su id
            var productCategory = await _context.ProductCategories.FindAsync(id);
            // Si no se encuentra, devolver un NotFound
            if (productCategory == null)
            {
                return NotFound();
            }

            // Eliminar la categoria
            _context.ProductCategories.Remove(productCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductCategoryExists(int id)
        {
            return _context.ProductCategories.Any(e => e.CategoryProductId == id);
        }
    }
}
