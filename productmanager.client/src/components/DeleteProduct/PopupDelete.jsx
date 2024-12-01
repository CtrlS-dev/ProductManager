import React, { useEffect } from "react";
import { UseProducts } from "../../context/ProductContext";
import { TiDelete } from "react-icons/ti";
const PopupDelete = () => {
  const { deleteProducts, setRemovingProduct, removingProduct } = UseProducts();

  const handleDelete = () => {
    deleteProducts(removingProduct.productId);
    setRemovingProduct(null);
    console.log("Producto eliminado");
  };

  if (!removingProduct) return null;

  return (
    <div className="mx-auto fixed inset-0 h-full w-full flex items-center bg-black/30 backdrop-blur-sm animate__fadeIn animate__faster animate__animated">
      <form className="space-y-4 bg-white p-6 rounded-lg w-96 shadow-md mx-auto flex flex-col items-center">
        <TiDelete className="text-9xl text-red-600" />
        <div>
          <p className="text-center text-xl text-slate-800">
            ¿Eliminar producto?
          </p>
          <p className="text-center text-sm text-slate-800">
            Si eliminas este producto desaparecerá de la base de datos
          </p>

          <div className="w-full flex justify-between mt-6 gap-8">
            <button
              onClick={() => setRemovingProduct(null)}
              className="px-4 py-2 bg-gray-500  text-white rounded-md animated hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Cancelar
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-400  text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 animated"
            >
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PopupDelete;
