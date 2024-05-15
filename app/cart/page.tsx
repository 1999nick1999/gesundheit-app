"use client";

import Footer from "@/components/footer";
import CartItem from "@/components/cartItem";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useEffect, useState } from "react";

interface Products {
  colorFrom: string;
  colorTo: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  textArray: string[];
  image: string;
  color: string;
  key: string;
  productid: string;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    const cartItemsJSON = localStorage.getItem("cart") || "";
    let cartItemArray: Products[] = [];

    if (cartItemsJSON) {
      try {
        cartItemArray = JSON.parse(cartItemsJSON);
      } catch (error) {
        console.error("Error parsing cart items:", error);
      }
    }

    setCartItems(cartItemArray);
  }, []);

  const deleteItem = (productid: string) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.productid !== productid
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <main className="bg-gray-200 rounded-lg pt-8 xl:pt-20 overflow-hidden w-full">
      <h2 className="text-fuchsia-900 px-8 xl:px-20 mb-6">Cart</h2>
      {cartItems.length === 0 ? (
        <div className="w-full h-80 xl:h-40 flex justify-center items-center mb-6">
          <p>Nothing in your cart</p>
        </div>
      ) : (
        <div className="w-full mb-20 px-8 xl:px-20">
          {cartItems.map((products, index) => (
            <CartItem
              colorFrom={products.colorFrom}
              colorTo={products.colorTo}
              title={products.title}
              oldPrice={products.oldPrice}
              newPrice={products.newPrice}
              textArray={products.textArray}
              image={products.image}
              color={products.color}
              key={products.key + index.toString()}
              productid={products.productid}
              quantity={products.quantity}
              deleteItem={deleteItem}
            />
          ))}
          <Button className="w-full gap-4">
            <CreditCard />
            Pay
          </Button>
        </div>
      )}
      <Footer />
    </main>
  );
}
