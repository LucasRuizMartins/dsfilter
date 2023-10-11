import { ProductDTO } from "../../models/product";

type Props = {
  product?: ProductDTO;
};

export function ProductCard({ product }: Props) {
  return (
    <div className="dsf-container">
      <div className="product-card">
        <p className="product-name">{product?.name}</p>
        <p className="product-price">R$ : {product?.price.toFixed(2)} </p>
      </div>
    </div>
  );
}
