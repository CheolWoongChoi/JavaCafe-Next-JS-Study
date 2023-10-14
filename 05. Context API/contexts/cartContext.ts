import { Dispatch, SetStateAction, createContext } from "react";

type Items = Record<string, number>;

type Context = {
  items: Items;
  setItems: Dispatch<SetStateAction<Items>>;
};

const CartContext = createContext<Context>({
  items: {},
  setItems: () => null,
});

export default CartContext;
