import { useState } from "react";
import { Product } from "../interfaces/products.interface";
import { IContext, State } from "../interfaces/state.interface";

const initialState: State = {
  cart: [],
};

export const useInitialState = (): IContext => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeToCart = (indexValue: number) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== indexValue),
    });
  };

  return { state, addToCart, removeToCart };
};
