import FormUpdateProduct from "./components/FormComponents/FormUpdateProduct.jsx";
import FormNewProduct from "./components/FormComponents/FormNewProduct.jsx";
import Table from "./Components/Table.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import AddProductButton from "./components/AddProductButton.jsx";
import PopupDelete from "./components/DeleteProduct/PopupDelete.jsx";

// Componente principal

export default function App() {
  return (
    <div className="flex flex-col mt-28 text-black/90 mx-auto w-fit items-center">
      <ProductContextProvider>
        <FormNewProduct />
        <div id="product-data-content" className="flex flex-col">
          <Table />
          <AddProductButton />
        </div>
        <PopupDelete />
        <FormUpdateProduct />
      </ProductContextProvider>
    </div>
  );
}
