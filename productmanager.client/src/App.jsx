import FormUpdateProduct from "./components/FormComponents/FormUpdateProduct.jsx";
import FormNewProduct from "./components/FormComponents/FormNewProduct.jsx";
import Table from "./Components/Table.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import AddProductButton from "./components/AddProductButton.jsx";

// Componente principal

export default function App() {
  return (
    <div className="flex flex-col mt-20 text-black/90 mx-auto w-fit">
      <ProductContextProvider>
        <AddProductButton />
        <FormNewProduct />
        <div id="product-data-content">
          <Table />
        </div>
        <FormUpdateProduct />
      </ProductContextProvider>
    </div>
  );
}
