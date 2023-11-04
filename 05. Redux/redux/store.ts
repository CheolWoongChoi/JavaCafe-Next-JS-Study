import { Context, HYDRATE, createWrapper } from "next-redux-wrapper";
import { useMemo } from "react";
import { createStore, applyMiddleware, AnyAction, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// interface Item {
//   [key: string]: number;
// }

// interface State {
//   items: Item[];
// }

// const initialState: State = {
//   items: [],
// };

interface State {
  [key: string]: number;
}

const initialState: State = {};

const reducer = (state = initialState, action: AnyAction) => {
  const itemID = action.id;

  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "INCREMENT":
      // eslint-disable-next-line no-case-declarations
      const newItemAmount = itemID in state ? state[itemID] + 1 : 1;
      return {
        ...state,
        [itemID]: newItemAmount,
      };
    case "DECREMENT":
      if (state?.[itemID] > 0) {
        return {
          ...state,
          [itemID]: state[itemID] - 1,
        };
      }
      return state;
    default:
      return state;
  }
};

// TODO
// const persistedReducer = persistReducer({ key: "root", storage }, reducer);

const store = createStore(reducer, composeWithDevTools());

const makeStore = (context: Context) => store;

// export const persistor = persistStore(store);

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
