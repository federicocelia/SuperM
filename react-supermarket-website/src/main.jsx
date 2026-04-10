import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";

// Product component
function Product() {
  return (
    <div className="product">
      <img
        className="product-image"
        width="272"
        height="300"
        alt="Pineapple"
        src="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/pineapple.jpg"
      />
      <p className="product-name">Pineapple</p>
      <div className="product-price">$2.00</div>
    </div>
  );
}

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

createRoot(document.querySelector("#root")).render(<App />);
