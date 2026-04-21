import { useState } from "react";

export default function Cart(props) {
  const product = props.product;
  const [total, setTotal] = useState(0);
  const price = (product.price / 100).toFixed(2);
  const [totalPrice, setPrice] = useState((0).toFixed(2));

  function add() {
    setTotal((prev) => prev + 1);
    setPrice((prev) => (parseFloat(prev) + parseFloat(price)).toFixed(2));
  }

  function remove() {
    if (total > 0) {
      setTotal((prev) => prev - 1);
      setPrice((prev) => (parseFloat(prev) - parseFloat(price)).toFixed(2));
    }
  }

  return (
    <div className="cart-wrapper">
      <h1>Your cart</h1>
      <div key={product.id} className="cart-product">
        <img
          src={product.thumbnail}
          alt={product.name}
          width="126"
          height="84"
        />
        <div className="cart-product-details">
          <div className="cart-product-name">
            <p>{product.name}</p>
            <ul className="cart-buttons">
              <li>{total}</li>
              <li>
                <button className="add-btn" onClick={add}>
                  +
                </button>
              </li>
              <li>
                <button
                  className="remove-btn"
                  onClick={remove}
                  disabled={total === 0}
                >
                  -
                </button>
              </li>
            </ul>
          </div>
          <p>${price}</p>
        </div>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
}
