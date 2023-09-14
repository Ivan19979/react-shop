import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const { id, name, price, count } = props;

  const { basketDelete, countDecrement, countIncrement } =
    useContext(ShopContext);
  return (
    <li className="collection-item">
      {name} {price} руб. x {count} = {price * count} руб.{" "}
      <button className="btn-count" onClick={() => countDecrement(id)}>
        -
      </button>{" "}
      <button className="btn-count" onClick={() => countIncrement(id)}>
        +
      </button>
      <span className="secondary-content">
        <i
          className="material-icons indigo-text basket-delete"
          onClick={() => basketDelete(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
