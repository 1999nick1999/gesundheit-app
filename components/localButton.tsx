"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductProps {
  colorFrom: string;
  colorTo: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  textArray: string[];
  image: string;
  color: string;
  key: number;
  count: number;
  query: string;
  currentPage: number;
}

export default function LocalButton(props: ProductProps) {
  function pushToCart() {
    if (localStorage.getItem("cart") === null) {
      let addedItems = [
        {
          colorFrom: props.colorFrom,
          colorTo: props.colorTo,
          title: props.title,
          oldPrice: props.oldPrice,
          newPrice: props.newPrice,
          textArray: props.textArray,
          image: props.image,
          color: props.color,
          productid: "1",
          quantity: props.count,
        },
      ];
      let string = JSON.stringify(addedItems);
      localStorage.setItem("cart", string);
    } else {
      let cartContent = localStorage.getItem("cart") || "";
      let cartObjects = JSON.parse(cartContent);
      let countItemsCart = cartObjects.length + 1;
      cartObjects.push({
        colorFrom: props.colorFrom,
        colorTo: props.colorTo,
        title: props.title,
        oldPrice: props.oldPrice,
        newPrice: props.newPrice,
        textArray: props.textArray,
        image: props.image,
        color: props.color,
        productid: countItemsCart,
        quantity: props.count,
      });
      let string = JSON.stringify(cartObjects);
      localStorage.setItem("cart", string);
    }
  }
  return (
    <Button
      className="w-full gap-2"
      onClick={() => {
        pushToCart();
        window.dispatchEvent(new Event("storage"));
      }}
    >
      <ShoppingCart className="w-4" />
      Add to cart
    </Button>
  );
}
