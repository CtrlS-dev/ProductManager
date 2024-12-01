import { useEffect } from "react";
import { UseProducts } from "../context/ProductContext.jsx";
import ProductLine from "./ProductLine.jsx";
import Loading from "./Loading.jsx";
import Searching from "./Icons/Searching.jsx";

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
      return <Loading />;
    } else if (products.length === 0) {
      return <Searching />;
    } else
      return (
        <div className="flex flex-col w-full h-full overflow-x-auto overflow-y-auto text-gray-700 bg-white shadow-md rounded-3xl bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead className="text-xs text-right sticky top-0">
              <tr>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Id Producto
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Descripcion
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Categoria
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Stock
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Precio Unitario
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Descuento Web
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Activo/Inactivo
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Acciones
                  </p>
                </th>
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
