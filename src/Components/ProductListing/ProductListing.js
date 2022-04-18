import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponents from "../ProductComponents";
import {fetchProducts } from "../../Redux/Action/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  },[]);

  console.log("products:", products);

  return (
    <>
      <div className="productListing">
        <ProductComponents />
      </div>
    </>
  );
};

export default ProductListing;
