function BasketItem(props) {
  const {
    id,
    name,
    price,
    count,
    basketDelete,
    countIncrement,
    countDecrement,
  } = props;
  return (
    <li className="collection-item">
      {name} x {count} = {price * count} руб.{" "}
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
