import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import "./styles.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Jabón",
      category: "Higiene",
      price: 2,
      isAvailable: false
    },
    {
      id: 2,
      name: "Galaxy S20",
      category: "Tecnología",
      price: 2000,
      isAvailable: true
    }
  ];

  return (
    <div className="App">
      <ProductsForm />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
