import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketClose,
    basketDelete,
    countDecrement,
    countIncrement,
  } = props;
  return (
    <div className="modal-basket" onClick={handleBasketClose}>
      <ul className="collection basket-list">
        <li className="collection-item indigo white-text">Корзина</li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.id}
              {...item}
              basketDelete={basketDelete}
              countDecrement={countDecrement}
              countIncrement={countIncrement}
            />
          ))
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
        <li className="collection-item indigo white-text">
          Общая стоимость:{" "}
          {order.reduce((acc, item) => item.price * item.count + acc, 0)}
          <button className="right btn-buy">Оформить заказ</button>
        </li>
        <i className="material-icons white-text basket-close">close</i>
      </ul>
    </div>
  );
}

export { BasketList };
