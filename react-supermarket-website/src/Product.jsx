export default function Product(props) {
  let price = (props.value.price / 100).toFixed(2);
  return (
    <div className="product">
      <img
        className="product-image"
        width="272"
        height="300"
        alt={props.value.name}
        src={`https://res.cloudinary.com/dbfn5lnvx/image/upload/v1726640668/react-tutorial/superm-v2/${props.value.name}.jpg`}
      />
      <p className="product-name">{props.value.name}</p>
      <div className="product-price">${price}</div>
    </div>
  );
}
