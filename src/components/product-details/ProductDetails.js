import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetails.css";

import { ReactComponent as Star } from "../../assets/star.svg";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { image, rating, title, price, description } = product;

  const location = useLocation();
  const productPath = location.state;

  useEffect(() => {
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
    <>
      {product.title && (
        <div className="product-details-container">
          <div className="product-details-description-grid">
            <div className="image-container">
              <img className="product-detail-image" src={image} alt={title} />
            </div>
            <div className="description-container">
              <h2>{title}</h2>
              <div className="rating">
                <span>
                  <Star className="star-icon" /> {rating?.rate}/ 5 (
                  {rating?.count} reseñas)
                </span>
              </div>
              <p className="product-details-price">${price}</p>
              <p>{description}</p>
            </div>
          </div>
          <button className="btn-atc">Agregar al carrito</button>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
