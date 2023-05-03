import { createContext } from "react";
import { IContext } from "../interfaces/state.interface";

export const AppContext = createContext<IContext>({} as IContext);
