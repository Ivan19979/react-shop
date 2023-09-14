export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "COUNT_INCREMENT":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            item.count = item.count + 0.5;
          }
          return item;
        }),
      };
    case "COUNT_DECREMENT": {
      state = {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            item.count = item.count - 0.5;
          }
          return item;
        }),
      };
      return {
        ...state,
        order: state.order.filter((item) => item.count > 0),
      };
    }
    case "ADD_ORDER": {
      state = { ...state, alertName: payload.name };
      if (state.order.find((item) => item.id === payload.id)) {
        return {
          ...state,
          order: state.order.map((item) => {
            if (item.id === payload.id) {
              item.count = item.count + 0.5;
            }
            return item;
          }),
        };
      }
      return {
        ...state,
        order: [
          ...state.order,
          {
            id: payload.id,
            name: payload.name,
            price: payload.price,
            count: 1,
          },
        ],
      };
    }
    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: true,
      };
    case "BASKET_DELETE":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "HANDLE_BASKET_CLOSE": {
      if (
        payload.target.classList.contains("modal-basket") ||
        payload.target.classList.contains("basket-close")
      ) {
        return {
          ...state,
          isBasketShow: false,
        };
      }
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
