import PropTypes from "prop-types";
import { UseProducts } from "../context/ProductContext";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import PopupDelete from "./DeleteProduct/PopupDelete";
// Componente para renderizar una linea de cada producto

function ProductLine({ product }) {
  // Hook para eliminar o editar un producto
  const {
    deleteProducts,
    setEditingProduct,
    setRemovingProduct,
    removingProduct,
  } = UseProducts();

  // Funcion para eliminar un producto
  const handleDelete = () => {
    setRemovingProduct(product);
  };

  // Funcion para editar un producto
  const handleEdit = () => {
    setEditingProduct(product);
  };

  return (
    <tr
      className="hover:bg-slate-50 border-b border-slate-200 max-h-44"
      key={product.productId}
    >
      <td className="p-4 py-5">
        <p className="block font-semibold text-sm text-slate-800 max-w-14 break-words">
          {product.productId}
        </p>
      </td>
      <td className="p-4 py-5">
        <p className="text-sm font-normal max-w-60 text-slate-500">
          {product.productDescription}
        </p>
      </td>
      <td className="p-4 py-5">
        <p className="text-sm font-normal max-w-44 text-slate-500">
          {product.productCategory.categoryDescription}
        </p>
      </td>
      <td className="p-4 py-5">
        <p className="text-sm font-normal text-slate-500 max-w-14 break-words">
          {product.stock}
        </p>
      </td>
      <td className="p-4 py-5">
        <p className="text-sm font-normal text-slate-500 max-w-14 break-words">
          {product.price} $
        </p>
      </td>
      <td className="p-4 py-5" title="¿Tiene descuento?">
        <p className="text-sm font-normal text-slate-500 max-w-5 break-words">
          {product.haveECDiscount === "y" ? "Sí" : "No"}
        </p>
      </td>
      <td className="p-4 py-5" title="¿Producto activo?">
        <p className="text-sm font-normal text-slate-500 max-w-5 break-words">
          {product.isActive === "y" ? "Sí" : "No"}
        </p>
      </td>
      <td className="ga-2 p-4 py-5">
        <button
          className="p-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setEditingProduct(product)}
        >
          <CiEdit />
        </button>
        <button
          onClick={() => handleDelete(product)}
          className="px-4 py-2 bg-red-300 ml-2 text-black rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          <CiTrash />
        </button>
      </td>
    </tr>
  );
}

ProductLine.propTypes = {
  product: PropTypes.object,
};

export default ProductLine;
