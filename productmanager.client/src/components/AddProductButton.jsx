import { UseProducts } from "../context/ProductContext";

// Componente del boton para agregar un producto

// Funcion para renderizar el boton
function AddProductButton() {
  // hook UseProducts para obtener los productos
  const { setAddingProduct } = UseProducts();

  return (
    <div>
      <button
        onClick={() =>
          setAddingProduct({
            productId: "",
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
          })
        }
        className="px-4 py-2 w-max bg-[#17181C] hover:bg-[#1EA566] text-white font-semibold rounded-full rounded-ss-none focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 animated animate__animated animate__fadeIn"
      >
        Añadir nuevo producto
      </button>
    </div>
  );
}

export default AddProductButton;
