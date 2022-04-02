import React from "react";
import ProductCard from "../product-card/ProductCard";
import './ProductCardGrid.css'


function ProductCardGrid({ products }) {
    
 
  return (
    <div className="product-grid-container">
      {products.map(({ id, image, title, price }) => (
        <ProductCard 
           
          key={title}
          id={id}
          image={image}
          title={title}
          price={price}
        />
      ))}
    </div>
  );
}

export default ProductCardGrid;
