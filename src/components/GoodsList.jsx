import { useEffect, useState } from "react";
import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addOrder = Function.prototype } = props;
  const [indexItem, setIndexItem] = useState(23);

  const handleMore = () => {
    setIndexItem(indexItem + 12);
  };

  useEffect(() => {}, [indexItem]);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div>
      <div className="goods">
        {goods.map((item, index) => {
          if (index > 10 && index < indexItem) {
            return (
              <GoodsItem key={item.mainId} {...item} addOrder={addOrder} />
            );
          }
          return null;
        })}
      </div>
      {goods.length > indexItem ? (
        <button className="btn btn-more grey lighten-4" onClick={handleMore}>
          More
        </button>
      ) : null}
    </div>
  );
}

export { GoodsList };
