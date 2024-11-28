import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

// Contexto de productos para la aplicación

const ProductContext = createContext();

// Hook para acceder al contexto
export const UseProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProduct must be used within a ProductProvider");
  return context;
};

// Proveedor del contexto
export const ProductContextProvider = ({ children }) => {
  // Estado para la tabla
  const [products, setProducts] = useState([]);
  // Estado para el producto que se está editando
  const [editingProduct, setEditingProduct] = useState(null);
  // Estado para el producto que se está agregando
  const [addingProduct, setAddingProduct] = useState(null);
  // Estado para el modo de creación de producto
  const [adding, setAdding] = useState(false);
  // Estado para la carga de productos
  const [loading, setLoading] = useState(false);

  // GET
  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://localhost:5287/api/Products");
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    } else {
      console.error("Error al obtener los productos");
    }
    setLoading(false);
  };

  // POST
  const createProducts = async (newProduct) => {
    setAdding(true);
    try {
      const result = await fetch("https://localhost:5287/api/Products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (result.ok) {
        {
          // e.target.reset();
          setAddingProduct(null);
          getProducts();
        }
      }
    } catch (error) {
      console.error(
        "Ha ocurrido un error al intentar crear el producto",
        error
      );
    } finally {
      setAdding(false);
    }
  };

  // DELETE
  const deleteProducts = async (id) => {
    try {
      await fetch(`https://localhost:5287/api/Products/${id}`, {
        method: "DELETE",
      });
      getProducts();
    } catch (error) {
      console.error(error);
    }
  };

  // PUT Products
  const updateProducts = async (id, updateProduct) => {
    try {
      const result = await fetch(`https://localhost:5287/api/Products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateProduct),
      });
      if (result.ok) {
        //volver a obtener tabla
        getProducts();
        // Limpiar el producto que se está editando
        setEditingProduct(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //PUT ProductCategories
  const updateProductsCategories = async (id, updateProductsCategory) => {
    try {
      const result = await fetch(
        `https://localhost:5287/api/ProductCategories/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateProductsCategory),
        }
      );
      if (result.ok) {
        //volver a obtener tabla
        getProducts();
        // Limpiar el producto que se está editando
        setEditingProduct(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        createProducts,
        adding,
        loading,
        deleteProducts,
        updateProducts,
        editingProduct,
        updateProductsCategories,
        setEditingProduct,
        addingProduct,
        setAddingProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: propTypes.node,
};

export default ProductContext;
