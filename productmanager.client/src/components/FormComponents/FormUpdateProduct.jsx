import { useState, useEffect } from "react";
import { UseProducts } from "../../context/ProductContext";
import FormElementOption from "./FormElementOption";
import FormElementInput from "./FormElementInput";

// Componente para editar un producto

// Renderizar el formulario
const FormUpdateProduct = () => {
  // hook UseProducts
  const {
    editingProduct,
    updateProducts,
    updateProductsCategories,
    setEditingProduct,
  } = UseProducts();

  // Estado para el formulario
  const [formData, setFormData] = useState({
    productId: "",
    categoryProductId: 0,
    productCategory: {
      categoryProductId: 0,
      categoryDescription: "",
      isActive: "n",
    },
    productDescription: "",
    stock: 0,
    price: 0,
    haveECDiscount: "n",
    isActive: "n",
  });

  // Estado para el modo de la categoría
  // "select" o "create"
  const [categoryMode, setCategoryMode] = useState("select");

  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("");

  // Estado para el nuevo nombre de la categoría
  const [newCategory, setNewCategory] = useState("");

  // Obtener los datos del producto a editar
  useEffect(() => {
    // Si se esta editando un producto
    if (editingProduct) {
      setFormData({
        productId: editingProduct.productId,
        categoryProductId: editingProduct.productCategory.categoryProductId,
        productCategory: {
          categoryProductId: editingProduct.productCategory.categoryProductId,
          categoryDescription:
            editingProduct.productCategory.categoryDescription || "",
          isActive: editingProduct.productCategory.isActive,
        },
        productDescription: editingProduct.productDescription,
        stock: editingProduct.stock,
        price: editingProduct.price,
        haveECDiscount: editingProduct.haveECDiscount,
        isActive: editingProduct.isActive,
      });
      // Actualizar la categoría seleccionada
      setSelectedCategory(editingProduct.productCategory.categoryDescription);
    }
  }, [editingProduct]); // Ejecutar el efecto cuando cambie el producto a editar

  // Manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Actualizar el estado del formulario
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (checked ? "y" : "n") : value,
    });
  };

  // Manejar el cambio del modo de la categoría
  const handleCategoryModeChange = (mode) => {
    setCategoryMode(mode);
    // Reseteo los valores de la categoría cuando se cambia el modo
    if (mode === "select") {
      setNewCategory("");
    } else {
      setSelectedCategory("");
    }
  };

  // Manejar el cambio de la categoría seleccionada
  const handleSubmit = (e) => {
    e.preventDefault();

    // Actualizar los datos del formulario
    const updatedFormData = {
      ...formData,
      // Actualizar la categoría
      productCategory: {
        ...formData.productCategory,
        // Actualizar la descripción de la categoría
        categoryDescription:
          // Dependiendo del modo de la categoría
          categoryMode === "select" ? selectedCategory : newCategory,
      },
    };

    // Actualizar los productos
    updateProducts(formData.productId, updatedFormData);

    // Actualizar las categorías
    updateProductsCategories(formData.productCategory.categoryProductId, {
      // Actualizar el identificador de la categoría
      categoryProductId: formData.productCategory.categoryProductId,
      categoryDescription:
        // Dependiendo del modo de la categoría
        categoryMode === "select" ? selectedCategory : newCategory,
      isActive: formData.isActive,
    });
  };

  // Si no hay producto a editar, no mostrar nada
  if (!editingProduct) return null;

  // Mostrar el formulario
  return (
    <div className="mx-auto fixed inset-0 h-full w-full flex items-center bg-black/30 backdrop-blur-sm animate__fadeIn animate__fast animate__animated">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Id de producto
          </label>
          <p
            className="mt-1 p-2 rounded-md bg-gray-100"
            title="El Id no es editable"
          >
            {formData.productId}
          </p>
        </div>
        <FormElementInput
          type={"text"}
          name={"productDescription"}
          value={formData.productDescription}
          onChange={handleChange}
          title={"Descripción del producto"}
          placeholder={"Descripción"}
          titleInput={"Descripción del producto"}
          validation={formData.productDescription === ""}
          textError={"Este campo es obligatorio, no puede estar vacio"}
        />

        <FormElementOption
          handleSelect={() => handleCategoryModeChange("select")}
          categoryMode={categoryMode}
          handleCreate={() => handleCategoryModeChange("create")}
          selectedCategory={selectedCategory}
          handleSelectedCategory={(e) => setSelectedCategory(e.target.value)}
          newCategory={newCategory}
          handleCreateOption={(e) => setNewCategory(e.target.value)}
        />

        <FormElementInput
          type={"number"}
          name={"stock"}
          value={formData.stock}
          onChange={handleChange}
          title={"Stock"}
          placeholder={"Ingresa stock disponibles"}
          titleInput={"Cantidad de productos"}
          validation={formData.stock < 0 || formData.stock === ""}
          textError={"Este campo no puede estar vacío y no puede ser negativo"}
        />

        <FormElementInput
          type={"number"}
          name={"price"}
          value={formData.price}
          onChange={handleChange}
          title={"Precio"}
          placeholder={"Ingresa precio de producto"}
          titleInput={"Precio del producto"}
          validation={formData.price === "" || formData.price < 0}
          textError={"Este campo no puede estar vacío y no puede ser negativo"}
        />

        <div className="flex gap-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Activo</label>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive === "y"}
              onChange={handleChange}
              title="¿El producto está activo?"
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">
              Descuento
            </label>
            <input
              type="checkbox"
              name="haveECDiscount"
              checked={formData.haveECDiscount === "y"}
              onChange={handleChange}
              title="¿El producto tiene descuento?"
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
          </div>
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Actualizar Producto
          </button>
          <button
            type="button"
            onClick={() => setEditingProduct(null)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUpdateProduct;
