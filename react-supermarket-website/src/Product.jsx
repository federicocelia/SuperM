export default function Product(prop) {
  let price = (prop.price / 100).toFixed(2);
  return (
    <div className="product">
      <img
        className="product-image"
        width="272"
        height="300"
        alt={prop.name}
        src={`https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/${prop.name}.jpg`}
      />
      <p className="product-name">{prop.name}</p>
      <div className="product-price">${price}</div>
    </div>
  );
}
