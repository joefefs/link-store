import React from "react";
import ProductCard from "../product-card/ProductCard";
import "./ProductCardGrid.css";

const ProductCardGrid = ({ products }) => {
  return (
    <div className="product-grid-page">
      <h2 className="product-grid-title">Listado de productos</h2>
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
    </div>
  );
}

export default ProductCardGrid;
