import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetails.css";

import { Rating } from "@mui/material"; //import from MUI library for rating widget

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { image, rating, title, price, description } = product;

  const location = useLocation();
  const productPath = location.state;

  useEffect(() => {
    // async function to fetch products and set them on state variavle product
    const getProduct = async () => {
      const data = await fetch(
        `https://fakestoreapi.com/products/${productPath}`
      );
      const response = await data.json();
      setProduct(response);
      console.log(response);
    };
    getProduct().catch(console.error);
  }, [productPath]); //added dependancy to avoid warning

  return (
    <div className="product-details-page">
      <h2 className="product-details-page-title">Detalles del producto</h2>
      {product.title && (
        <div className="product-details-container">
          <div className="product-details-description-grid">
            <div className="image-container">
              <img className="product-detail-image" src={image} alt={title} />
            </div>
            <div className="description-container">
              <h2>{title}</h2>
              <div className="rating">
                <span >
                  <Rating
                    precision={0.1}
                    value={rating?.rate}
                    readOnly
                    size="medium"
                  />
                </span>
                <p className="rating-text">
                {/* optional chaining to retrieve the nested object that contains the rating (otherwise, it will throw error because of async function) */}
                  {rating?.rate}/5 ({rating?.count} reseñas)
                </p>
              </div>
              <p className="product-details-price">${price}</p>
              <p>{description}</p>
            </div>
          </div>
          <button className="btn-atc">Agregar al carrito</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
