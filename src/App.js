import { useState, useEffect } from "react";
import ProductCardGrid from "./components/product-card-grid/ProductCardGrid";

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch('https://fakestoreapi.com/products')
      const response = await data.json()
      setProducts(response)
    }
    getProducts().catch(console.error)
  },[])

  return (
    <div>
      <ProductCardGrid products={products} />
      
    </div>
  );
}

export default App;
