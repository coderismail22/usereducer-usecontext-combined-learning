import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  { path: "/cart", element: <Cart></Cart> },
]);
