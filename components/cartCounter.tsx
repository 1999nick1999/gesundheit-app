"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function CartCounter({ name }: { name?: string }) {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let handleStorageChange = () => {
      const cartContent = localStorage.getItem("cart") || "[]";
      const cartAmount = JSON.parse(cartContent).length;
      setCartItems(cartAmount);
      console.log("the storage is updated");
    };

    // Listen for changes to localStorage
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div
      className={clsx(
        "visible rounded-full ml-auto h-6 w-6 flex justify-center items-center bg-fuchsia-300 text-fuchsia-700",
        {
          hidden: name !== "Cart",
        },
        {
          hidden: cartItems < 1,
        }
      )}
    >
      {cartItems}
    </div>
  );
}
