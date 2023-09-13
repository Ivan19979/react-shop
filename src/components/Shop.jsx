import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { API_KEY, API_URL } from "../config";
import { Alert } from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const countDecrement = (id) => {
    setOrder(
      order.map((item) => {
        if (item.id === id) {
          item.count = item.count - 1;
        }
        return item;
      })
    );
    setOrder(order.filter((item) => item.count !== 0));
  };

  const countIncrement = (id) => {
    setOrder(
      order.map((item) => {
        if (item.id === id) {
          item.count = item.count + 1;
        }
        return item;
      })
    );
  };

  const addOrder = (id, name, price) => {
    setAlertName(name);
    if (order.find((item) => item.id === id)) {
      return setOrder(
        order.map((item) => {
          if (item.id === id) {
            item.count = item.count + 1;
          }
          return item;
        })
      );
    }
    setOrder([...order, { id, name, price, count: 1 }]);
  };

  const handleBasketShow = () => {
    setIsBasketShow(true);
  };

  const handleBasketClose = (e) => {
    if (
      e.target.classList.contains("modal-basket") ||
      e.target.classList.contains("basket-close")
    ) {
      setIsBasketShow(false);
    }
  };

  const basketDelete = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart
        order={order}
        quantity={order.length}
        handleBasketShow={handleBasketShow}
      />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addOrder={addOrder} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketClose={handleBasketClose}
          basketDelete={basketDelete}
          countDecrement={countDecrement}
          countIncrement={countIncrement}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
