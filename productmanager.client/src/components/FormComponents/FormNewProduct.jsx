import { useState, useEffect } from "react";
import { UseProducts } from "../../context/ProductContext";
import FormElementOption from "./FormElementOption";
import FormElementInput from "./FormElementInput";

// Componente para agregar un producto

// Renderizar el formulario
const FormNewProduct = () => {
  // hook UseProducts
  const { addingProduct, createProducts, setAddingProduct, adding, products } =
    UseProducts();

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

  // Obtener los datos del producto a agregar
  useEffect(() => {
    // Si se esta agregando un producto
    if (addingProduct) {
      setFormData({
        productId: addingProduct.productId,
        categoryProductId: addingProduct.productCategory.categoryProductId,
        productCategory: {
          categoryProductId: addingProduct.productCategory.categoryProductId,
          categoryDescription:
            addingProduct.productCategory.categoryDescription || "",
          isActive: addingProduct.productCategory.isActive,
        },
        productDescription: addingProduct.productDescription,
        stock: addingProduct.stock,
        price: addingProduct.price,
        haveECDiscount: addingProduct.haveECDiscount,
        isActive: addingProduct.isActive,
      });
      // Actualizar la categoría seleccionada
      setSelectedCategory(addingProduct.productCategory.categoryDescription);
    }
  }, [addingProduct]); // Ejecutar el efecto cuando cambie el producto a agregar

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
  let productsArray = [];
  products.map((product) => productsArray.push(product.productId));

  // Manejar el cambio de la categoría seleccionada
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      productCategory: {
        ...formData.productCategory,
        categoryDescription:
          categoryMode === "select" ? selectedCategory : newCategory,
      },
    };
    // Crear el producto
    createProducts(updatedFormData);
  };

  // Si no hay producto a agregar, no mostrar nada
  if (!addingProduct) return null;

  // Mostrar el formulario
  return (
    <div className="mx-auto fixed inset-0 h-full w-full flex items-center bg-black/30 backdrop-blur-sm animate__fadeIn animate__fast animate__animated">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white mt-10 p-6 rounded-2xl shadow-md max-w-2xl mx-auto"
      >
        <FormElementInput
          type={"text"}
          name={"productId"}
          value={formData.productId}
          onChange={handleChange}
          title={"ID de producto"}
          placeholder={"Ejemplo: CA001"}
          titleInput={"Ingresa el ID del producto"}
          validation={formData.productId === ""}
          textError={"Este campo es obligatorio"}
          validation2={productsArray.includes(formData.productId)}
          textError2={"Este ID de producto ya existe, debes ingresar uno nuevo"}
        />

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
          validation2={formData.productDescription.length > 200}
          textError2={
            "No puede tener más de 200 caracteres. Caracteres actuales:" +
            formData.productDescription.length +
            "/200"
          }
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
          validation={formData.stock === ""}
          textError={"Este campo no puede estar vacío"}
          validation2={formData.stock < 0}
          textError2={"Este campo no puede ser negativo"}
        />

        <FormElementInput
          type={"number"}
          name={"price"}
          value={formData.price}
          onChange={handleChange}
          title={"Precio"}
          placeholder={"Ingresa precio de producto"}
          titleInput={"Precio del producto"}
          validation={formData.price === ""}
          textError={"Este campo no puede estar vacio"}
          validation2={formData.price <= 0}
          textError2={"Debes ingresar un precio válido"}
        />
        <div className="flex gap-4 text-lg font-semibold">
          <div className="flex items-center space-x-2">
            <label className="font-medium text-gray-700">Activo:</label>
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
            <label className="font-medium text-gray-700">Descuento:</label>
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
            disabled={adding}
          >
            {adding ? "Agregando..." : "Agregar"}
          </button>
          <button
            type="button"
            onClick={() => setAddingProduct(null)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormNewProduct;
