import { useState } from "react";
import { Product } from "../interfaces/products.interface";
import { IContext, State } from "../interfaces/state.interface";

const initialState: State = {
  cart: [],
};

export const useInitialState = (): IContext => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    payload.added = true;
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeToCart = (indexValue: number) => {
    setState({
      ...state,
      cart: state.cart.filter((product, index) => {
        const shouldRemove = index !== indexValue;
        product.added = shouldRemove;
        return shouldRemove;
      }),
    });
  };

  return { state, addToCart, removeToCart };
};
