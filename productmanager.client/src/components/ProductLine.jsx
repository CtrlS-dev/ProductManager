import PropTypes from "prop-types";
import { UseProducts } from "../context/ProductContext";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

// Componente para renderizar una linea de cada producto

function ProductLine({ product }) {
  // Hook para eliminar o editar un producto
  const { deleteProducts, setEditingProduct } = UseProducts();

  // Funcion para eliminar un producto
  const handleDelete = () => {
    deleteProducts(product.productId);
  };

  // Funcion para editar un producto
  const handleEdit = () => {
    setEditingProduct(product);
  };

  return (
    <tr
      className="hover:bg-slate-200 rounded-md h-12 transition-all duration-300 divide-dotted divide-x-2 divide-y-2 divide-gray-200 ease-in-out hover:cursor-pointer"
      key={product.productId}
    >
      <td className="p-2">{product.productId}</td>
      <td className="p-2 max-w-48">{product.productDescription}</td>
      <td className="p-2">{product.productCategory.categoryDescription}</td>
      <td className="p-2">{product.stock}</td>
      <td className="p-2">{product.price} $</td>
      <td className="p-2" title="¿Tiene descuento?">
        {product.haveECDiscount === "y" ? "Sí" : "No"}
      </td>
      <td className="p-2" title="¿Producto activo?">
        {product.isActive === "y" ? "Sí" : "No"}
      </td>
      <td className="gap-2 p-2">
        <button
          className="p-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setEditingProduct(product)}
        >
          <CiEdit />
        </button>
        <button
          onClick={() => handleDelete()}
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
