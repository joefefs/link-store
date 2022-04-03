import "./ProductCard.styles.css";

//Link from React Router lib to link to a route that contains the title of the product in the URL. 
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, id, price }) => {
  return (
    <>
      <div className="product-card-container">
      {/* state prop of Link so we can pass Id which will be used as a URL path to retrieve that specific product's detail and display tje ProductDetails component on that product's route. */}
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
