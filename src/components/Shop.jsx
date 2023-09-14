import { useEffect, useContext } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { API_KEY, API_URL } from "../config";
import { Alert } from "./Alert";
import { ShopContext } from "../context";

function Shop() {
  const { loading, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
