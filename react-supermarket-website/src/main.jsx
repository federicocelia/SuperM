import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Product from "./Product";
import products from "./data";

function App(props) {
  // Checking the rendering of multiple products inside the .products-grid
  return (
    <div className="products-grid">
      {props.products.map((product) => {
        return <Product key={product.id} value={product} />;
      })}
    </div>
  );
}

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App products={products} />
  </StrictMode>,
);
