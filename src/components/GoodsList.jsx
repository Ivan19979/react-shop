import { useState, useContext } from "react";
import { ShopContext } from "../context";
import { GoodsItem } from "./GoodsItem";

function GoodsList() {
  const [indexItem, setIndexItem] = useState(23);
  const { goods = [] } = useContext(ShopContext);

  const handleMore = () => {
    setIndexItem(indexItem + 12);
  };

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div>
      <div className="goods">
        {goods.map((item, index) => {
          if (index > 10 && index < indexItem) {
            return <GoodsItem key={item.mainId} {...item} />;
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
