function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addOrder = Function.prototype,
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn btn-item indigo"
          onClick={() => addOrder(mainId, displayName, price.regularPrice)}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.6rem" }}>
          {price.regularPrice} руб
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
