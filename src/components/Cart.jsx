import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const { order, handleBasketShow } = useContext(ShopContext);

  return (
    <div className="basket indigo white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {order.length ? (
        <span className="basket-quantity">{order.length}</span>
      ) : null}
    </div>
  );
}

export { Cart };
