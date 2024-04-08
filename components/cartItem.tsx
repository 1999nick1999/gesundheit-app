"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";

interface ProductProps {
  colorFrom: string;
  colorTo: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  textArray: string[];
  image: string;
  color: string;
  key: string;
  quantity: number;
  productid: string;
  deleteItem: (key: string) => void;
}

export default function CartItem(props: ProductProps) {
  let cost = parseFloat(props.newPrice) * props.quantity;

  const handleDelete = () => {
    // Call deleteItem function with item's key when clicked
    props.deleteItem(props.productid);
  };

  return (
    <>
      <div
        className={`bg-white my-4 fuchsia p-8 h-80 w-auto rounded-2xl flex flex-col justify-between relative`}
        onClick={handleDelete}
      >
        <div className="flex justify-between">
          <div>
            <h3 className="mb-2">{props.title}</h3>
            <ul className="list-disc ml-4 mt-4">
              {props.textArray.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          <div
            className={`h-40 w-40 flex items-center justify-center bg-gradient-to-tl ${props.colorFrom} ${props.colorTo} rounded-lg`}
          >
            <Image
              src={`/images/${props.image}.png`}
              alt="product image"
              width={100}
              height={100}
              className="w-24 h-24"
            ></Image>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500">quantity: {props.quantity}</p>
            <p className="text-xs text-fuchsia-900">${cost} per month</p>
          </div>
          <Trash2 className="text-gray-500 hover:text-red-500 hover:cursor-pointer ease-out duration-100" />
        </div>
      </div>
    </>
  );
}
