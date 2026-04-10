import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Product from "./Product";

function App() {
  // Checking the rendering of multiple products inside the .products-grid
  return (
    <div className="products-grid">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
