import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";

export const Details = () => {
  const navigate = useNavigate();
  const { state, addToCart } = useCart();
  const [amount, setAmount] = useState(1);
  const stock = 10;

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const product = {
    name: "T-Shirt",
    img: "https://www.aarong.com/media/catalog/product/0/1/0120000033552.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400",
    description: "I Like Polo Shirt",
    category: "T-Shirt",
    price: 500,
    size: "XL",
  };

  const handleAddToCart = (product) => {
    console.log("product got it ", product);
    addToCart(product);
    console.log("state got it ", state);
    navigate("/cart");
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg border-2">
      <img className="w-full" src={product.img} alt="Product Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>

      {/* Quantity */}
      <div>
        <div className="my-5 flex flex-col justify-center items-center">
          <div className="flex gap-5 items-center">
            <button
              className="bg-slate-200 p-2 hover:bg-slate-300 ease-in duration-200"
              onClick={() => setDecrease()}
            >
              <FaMinus />
            </button>
            <div className="w-10">
              <h1>{amount}</h1>
            </div>
            <button
              className="bg-slate-200 p-2 hover:bg-slate-300 ease-in duration-200"
              onClick={() => setIncrease()}
            >
              <FaPlus />
            </button>
          </div>
          <div className="mt-2">
            <h1>
              {"["} Only{" "}
              <span className="font-bold text-orange-500">{stock}</span> Items
              Left {"]"}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {product.category}
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
          $ {product.price}
        </span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
          {product.size}
        </span>
        <button
          type="button"
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
