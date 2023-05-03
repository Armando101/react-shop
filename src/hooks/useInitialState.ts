import { useState } from "react";
import { Product } from "../interfaces/products.interface";
import { State } from "../interfaces/state.interface";

const initialState: State = {
  cart: [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  return { state, addToCart };
};
