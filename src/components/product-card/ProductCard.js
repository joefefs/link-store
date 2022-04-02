import "./ProductCard.styles.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, id, price }) => {
  return (
    <>
      <div className="product-card-container">
        <Link to={`/products/${title}`} state={id}>
          <div className="product-image-container">
            <img
              id={id}
              className="product-card-image"
              src={image}
              with="200px"
              alt={title}
              
            />
          </div>
        </Link>

        <Link to={`/products/${title}`} state={id}>
          <p id={id} className="product-card-title">
            {title}
          </p>
        </Link>
        <p id={id} className="product-card-price">
          $ {price}
        </p>
      </div>
    </>
  );
};

export default ProductCard;
