import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Product from "./Product";
import products from "./data";
import Cart from "./Cart";

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
    <>
      <App products={products} />
      <Cart
        product={{
          id: 1,
          name: "Pineapple",
          price: 250,
          thumbnail:
            "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/pineapple.jpg",
        }}
      />
    </>
  </StrictMode>,
);
