import productData from "../pages/Data";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="product-list">
      {productData.map((product) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.img} alt={product.productName} />
            <p>
              <strong>{product.productName}</strong>
            </p>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
