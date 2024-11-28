import PropTypes from "prop-types";
import { UseProducts } from "../../context/ProductContext";
import { useEffect } from "react";

// Este componente se encarga de renderizar el select del formulario

// Funcion para renderizar el select del formulario
function FormElementOption({
  handleSelect,
  categoryMode,
  handleCreate,
  selectedCategory,
  handleSelectedCategory,
  newCategory,
  handleCreateOption,
}) {
  // hook UseProducts para obtener los productos
  const { products, getProducts } = UseProducts();

  // useEffect para obtener los productos cuando se monte el componente
  useEffect(() => {
    getProducts();
  }, []);

  // Obtener las categorias unicas
  const uniqueCategories = [
    // Eliminar categorías duplicadas
    ...new Set(
      products.map((product) => product.productCategory.categoryDescription)
    ),
  ];

  return (
    <div className="space-y-3">
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={handleSelect}
          className={`px-4 animated py-2 rounded-md outline-gray-400 ${
            categoryMode === "select"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          Seleccionar categoría
        </button>
        <button
          type="button"
          onClick={handleCreate}
          className={`px-4 animated py-2 rounded-md outline-gray-400 ${
            categoryMode === "create"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          Crear nueva categoría
        </button>
      </div>

      {categoryMode === "select" ? (
        <div>
          <select
            value={selectedCategory}
            onChange={handleSelectedCategory}
            className="mt-1 w-full p-2 rounded-md shadow-sm bg-indigo-100/60 outline-gray-400 text-black outline outline-2 focus:outline-indigo-500  animated hover:outline-indigo-700/80"
          >
            <option value="" className="bg-indigo-200" disabled>
              Selecciona una categoría
            </option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {selectedCategory === "" ? (
            <p className="text-sm text-red-500 font-medium animate__animated animate__fadeInDown animate__faster mt-2">
              Debes seleccionar una categoría
            </p>
          ) : null}
        </div>
      ) : (
        <div>
          <label className="block text-sm font-medium text-gray-700"></label>
          <input
            type="text"
            value={newCategory}
            onChange={handleCreateOption}
            className="mt-1 w-full p-2 border border-gray-300 outline-gray-400 hover:bg-gray-100 text-black outline outline-2 focus:outline-indigo-500  animated hover:outline-indigo-700/80 bg-transparent rounded-md shadow-sm"
            placeholder="Ingrese nueva categoría"
          />
          {newCategory === "" ? (
            <p className="text-sm text-red-500 font-medium animate__animated animate__fadeInDown animate__faster mt-2">
              Debes ingresar un nombre para la nueva categoría
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}

FormElementOption.propTypes = {
  handleSelect: PropTypes.func,
  categoryMode: PropTypes.string,
  handleCreate: PropTypes.func,
  selectedCategory: PropTypes.string,
  handleSelectedCategory: PropTypes.func,
  newCategory: PropTypes.string,
  handleCreateOption: PropTypes.func,
};

export default FormElementOption;
