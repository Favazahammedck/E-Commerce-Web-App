import { ActionsType } from "../constants/action-types";
const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsType.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const slelectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionsType.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionsType.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};

// add to cart
const cart = [];
export const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

    break;
    case "DELELTE_ITEM_FROM_CART":
      const existOne = state.find((x) => x.id === product.id);
      if (existOne.quantity === 1) {
        return state.filter((x) => x.id !== existOne.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
    break;
    default:
      return state;
    break;
  }
};
