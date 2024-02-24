import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Details } from "../pages/Details/Details";
import { Cart } from "../pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
