import React, { createContext, useReducer } from "react";
const CartContext = createContext();

export const cartContext = ({ children }) => {
  //   Just Like useState but instead of passing setState, we pass dispatch.
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  //   Single Function For Reducer
  const usableFunction = (parameters) => {
    dispatch({
      type: "CASE_NAME",
      payload: {
        // all needed data
      },
    });
  };
  
};
