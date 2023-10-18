<<<<<<< HEAD
import { useState, useEffect, useContext } from "react";
import { ProductDTO } from "../../models/product";
import { Filter } from "../Filter";
import { ProductCard } from "../ProductCard";
import * as productService from "../../services/product-service";
import "./styles.css";
import { ContextProductCount } from "../../services/context-product";

type QueryParams = {
  min: number;
  max: number;
};



export function ListingBody() {
  const [product, setProduct] = useState<ProductDTO[]>([]);
  const { setContextProductCount } = useContext(ContextProductCount);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    min: 0,
    max: Number.MAX_VALUE,
 
  });

  useEffect(() => {
    setProduct(productService.findByPrice(queryParams.min, queryParams.max));
    setContextProductCount(productService.findByPrice(queryParams.min,queryParams.max).length);
  }, [queryParams]);

  return (
    <>
      <Filter></Filter>
      <div className="dsf-container">
        <div className="card-list">
          {product.map((product) => ( 
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
=======
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
>>>>>>> ab1a0d2b7e3c4b9af391d25738474772e06cd6b9
    </>
  );
}
 