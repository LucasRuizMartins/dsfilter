import { useEffect, useState } from "react";
import { Filter } from "../Filter";
import { Listing } from "../Listing";
import * as productService from "../../services/product-service";
import { ProductDTO } from "../../models/product";

export function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Number.MAX_VALUE);

  useEffect(() => {
    productService.findByPrice(minValue, maxValue).then((response) => {
      setProducts(response.data.content);
    });
  }, []);

  function handleSearch(minValue, maxValue) {
    setMinValue(minValue);
    setMaxValue(maxValue);
  }

  return (
    <>
      <Filter onFilter={handleSearch}></Filter>
      <Listing></Listing>
    </>
  );
}
