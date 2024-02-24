import React from "react";
import { useCart } from "../../context/CartContextProvider";

export const Cart = () => {
  const { state } = useCart();
  const cart = state.cart;
  console.log("singe data", cart);
  console.table(cart);
  return (
    <div className="text-center text-red-700 text-3xl font-bold">
      <h1>This is Cart Page</h1>
      {cart.map((item) => (
        <div className="border-2 border-red-500 mb-5">
          <img src={item.img} alt="ProductImg" />
          <h1>{item.name}</h1>
          <h1>{item.size}</h1>
          <h1>{item.price}</h1>
          <h1>{item.category}</h1>
          <h1>{item.description}</h1>
        </div>
      ))}
    </div>
  );
};
