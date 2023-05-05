import { Product } from "./products.interface";

export interface State {
  cart: Product[];
}

export interface IContext {
  state: State;
  addToCart: (payload: Product) => void;
  removeToCart: (payload: number) => void;
}
