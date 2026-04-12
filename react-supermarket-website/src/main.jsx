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
      <Product
        name="Pineapple"
        price={200}
        image="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/pineapple.jpg"
      />
      <Product
        name="Banana"
        price={75}
        image="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/banana.jpg"
      />
    </div>
  );
}

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
