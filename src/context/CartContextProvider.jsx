import React, { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //   Just Like useState but instead of passing setState, we pass dispatch.
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  //   Reducer Function
  //   const usableFunction = (parameters) => {
  //     dispatch({
  //       type: "CASE_NAME",
  //       payload: {
  //         // all needed data
  //       },
  //     });
  //   };

  //   Reducer Function
  const addToCart = (itemObject) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...itemObject
      },
    });
  };

  return (
    <CartContext.Provider value={{ state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for Easier Usage
const useCart = () => {
  const contextData = useContext(CartContext);
  if (!contextData) {
    throw new Error("There was an error !");
  }
  return contextData;
};

export { CartContextProvider, useCart };
