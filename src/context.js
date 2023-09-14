import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.basketDelete = (itemId) => {
    dispatch({ type: "BASKET_DELETE", payload: { id: itemId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "HANDLE_BASKET_SHOW" });
  };

  value.addOrder = (id, name, price) => {
    dispatch({ type: "ADD_ORDER", payload: { id, name, price } });
  };

  value.countIncrement = (id) => {
    dispatch({ type: "COUNT_INCREMENT", payload: { id } });
  };
  value.countDecrement = (id) => {
    dispatch({ type: "COUNT_DECREMENT", payload: { id } });
  };
  value.handleBasketClose = (e) => {
    dispatch({ type: "HANDLE_BASKET_CLOSE", payload: e });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
