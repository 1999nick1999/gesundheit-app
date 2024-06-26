"use client";

import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalButton from "@/components/localButton";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import clsx from "clsx";

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
  query: string;
  currentPage: number;
}

export default function Product(props: ProductProps) {
  const [count, setCount] = useState(1);
  const initPrice = parseFloat(props.newPrice.replace(",", "."));

  function countCartItems() {
    if (typeof window !== "undefined") {
      let cartContent = localStorage.getItem("cart") || "{}";
      let cartObjects = JSON.parse(cartContent);
      let countItemsCart = cartObjects.length + 1;
      return countItemsCart;
    }
  }

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <div
            className={`bg-gradient-to-tl ${props.colorFrom} ${props.colorTo} my-4 mx-8 xl:mx-20 fuchsia p-8 h-full xl:h-80 w-full rounded-2xl flex flex-col xl:flex-row justify-between relative drop-shadow-sm hover:-translate-y-1 duration-100 ease-out hover:drop-shadow-lg hover:cursor-pointer`}
          >
            <div>
              <h3 className="mb-2">{props.title}</h3>
              <p className="text-xs text-gray-500 line-through">
                ${props.oldPrice} per month
              </p>
              <p className="text-xs text-fuchsia-900">
                ${props.newPrice} per month
              </p>
              <ul className="list-disc ml-4 mt-4">
                {props.textArray.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
            <div className="h-full flex items-center">
              <Image
                src={`/images/${props.image}.png`}
                alt="product image"
                width={200}
                height={200}
                className="w-52 h-52 my-10 xl:my-0"
              ></Image>
            </div>
            <div></div>
            <div className="absolute right-8 bottom-8">
              <PlusCircle className="text-fuchsia-900"></PlusCircle>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent className="px-20">
          <div className="flex flex-col justify-center items-center my-10">
            <div className="max-w-[500px] w-full flex flex-col-reverse xl:flex-row justify-between items-center mb-10">
              <div>
                <h2>{props.title}</h2>
                <ul className="list-disc ml-4 mt-4">
                  {props.textArray.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
              <div
                className={`bg-gradient-to-tl ${props.colorFrom} ${props.colorTo} fuchsia p-8 h-32 w-32 rounded-lg flex items-center justify-center mb-4 xl:mb-0`}
              >
                <Image
                  src={`/images/${props.image}.png`}
                  alt="product image"
                  width={100}
                  height={100}
                  className="w-16 h-16"
                ></Image>
              </div>
            </div>
            <DrawerFooter className="flex flex-col items-center">
              <p>price per month: ${(initPrice * count).toFixed(2)}</p>
              <div className="w-full flex justify-between my-4">
                <Button
                  onClick={() => {
                    if (count > 1) {
                      setCount(count + -1);
                    }
                  }}
                  className={clsx("", {
                    "bg-gray-300 hover:bg-gray-300 hover:cursor-default":
                      count === 1,
                  })}
                >
                  -
                </Button>
                <div className="h-10 w-10 flex justify-center items-center border-2 border-gray-500 rounded-md text-gray-700 ">
                  {count}
                </div>
                <Button
                  onClick={() => {
                    if (count < 4) {
                      setCount(count + 1);
                    }
                  }}
                  className={clsx("", {
                    "bg-gray-300 hover:bg-gray-300 hover:cursor-default":
                      count === 4,
                  })}
                >
                  +
                </Button>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <DrawerClose className="w-full">
                  <LocalButton
                    colorFrom={props.colorFrom}
                    colorTo={props.colorTo}
                    title={props.title}
                    oldPrice={props.oldPrice}
                    newPrice={props.newPrice}
                    textArray={props.textArray}
                    image={props.image}
                    color={props.color}
                    key={countCartItems()}
                    count={count}
                    query={props.query}
                    currentPage={props.currentPage}
                  />
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
