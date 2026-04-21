import React from "react";
import Cart from "./Cart";
import Product from "./Product";

export default function App(props) {
  return (
    <>
      <div className="products-grid">
        {props.products.map((product) => {
          return <Product key={product.id} value={product} />;
        })}
      </div>
    </>
  );
}
