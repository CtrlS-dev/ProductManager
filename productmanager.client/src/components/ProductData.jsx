import { useEffect } from "react";
import { UseProducts } from "../context/ProductContext.jsx";
import ProductLine from "./ProductLine.jsx";
import Loading from "./Loading.jsx";

// Funcion para obtener los productos
function ProductData() {
  // hook UseProducts para obtener los productos
  const { products, getProducts, loading } = UseProducts();

  // useEffect para obtener los productos cuando se monte el componente
  useEffect(() => {
    getProducts();
  }, []);

  // funcion para renderizar los productos en caso de que esten cargados/cargando/inexistentes
  function renderProducts() {
    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else if (products.length === 0) {
      return <div>No hay productos</div>;
    } else
      return (
        <div className="overflow-x-auto m-8 bg-white flex items-center justify-center max-w-[65rem] max-h-[55rem] rounded-3xl p-6 shadow-lg shadow-black/40 ">
          <table className="divide-dotted divide-y-2 divide-gray-200">
            <thead className="text-xs bg-gray-200">
              <tr className="divide-x-2 divide-dotted divide-gray-200">
                <th className="text-left p-2">Id Producto</th>
                <th className="text-left max-w-8">Descripcion</th>
                <th className="text-left p-2">Categoria</th>
                <th className="text-left p-2">Stock</th>
                <th className="text-left p-2">Precio Unitario</th>
                <th className="text-left p-2">Descuento Web</th>
                <th className="text-left p-2">Activo/Inactivo</th>
                <th className="text-left p-2">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {products.map((product) => (
                <ProductLine product={product} key={product.productId} />
              ))}
            </tbody>
          </table>
        </div>
      );
  }
  // Llamada a la funcion para renderizar los productos
  return <div>{renderProducts()}</div>;
}

export default ProductData;
