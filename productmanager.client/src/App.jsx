import FormUpdateProduct from "./components/FormComponents/FormUpdateProduct.jsx";
import FormNewProduct from "./components/FormComponents/FormNewProduct.jsx";
import Table from "./Components/Table.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import AddProductButton from "./components/AddProductButton.jsx";

// Componente principal

export default function App() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] mt-20 text-black/90 mx-auto w-fit items-center justify-center">
      <ProductContextProvider>
        <FormNewProduct />
        <div id="product-data-content" className="flex flex-col">
          <Table />
          <AddProductButton />
        </div>
        <FormUpdateProduct />
      </ProductContextProvider>
    </div>
  );
}
