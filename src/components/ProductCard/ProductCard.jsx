import { Link } from "react-router-dom";
import "../../styles/ProductCard.css";

export default function ProductCard({ product }) {

  const { id, title, image, price, oldPrice, unitPrice, unit, stock, sold } = product;

  return (
    <article className="product-card">
      <div className="product-card__media">
        <Link to={`/product/${id}`} className="product-card__img">
          <img src={image} alt={title} loading="lazy" />
        </Link>
        
      </div>

      <Link to={`/product/${id}`} className="product-card__title">
        {title}
      </Link>

      <span className="product-card__unit">
        ${unitPrice.toFixed(2)}/{unit}
      </span>

      <div className="product-card__prices">
        <strong>${price.toFixed(2)}</strong>
        {oldPrice && <del>${oldPrice.toFixed(2)}</del>}
      </div>

      <div className="product-card__meta">
        <span className="product-card__stock">{stock} Left</span>
        <span>{sold} Sold</span>
      </div>
    </article>
  );
}
