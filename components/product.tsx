import Image from "next/image"
import { PlusCircle } from "lucide-react"

interface ProductProps {
    colorFrom: string;
    colorTo: string;
    title: string;
    oldPrice: string;
    newPrice: string;
    textArray: string[];
    image: string;
}

export default function Product(props: ProductProps) {
    return (
        <div className={`bg-gradient-to-r ${props.colorFrom} ${props.colorTo} m-4 fuchsia p-8 h-80 w-full rounded-2xl flex justify-between relative drop-shadow-sm hover:-translate-y-1 duration-100 ease-out hover:drop-shadow-lg hover:cursor-pointer`}>
        <div>
            <h3 className="mb-2">{props.title}</h3>
            <p className="text-xs text-gray-500 line-through">${props.oldPrice} per month</p>
            <p className="text-xs text-fuchsia-900">${props.newPrice} per month</p>
            <ul className="list-disc ml-4 mt-4">
                {props.textArray.map((text) => <li key={text}>{text}</li>)}
            </ul>
        </div>
        <div className="h-full flex items-center">
            <Image src={`/images/${props.image}.png`} alt="product image" width={200} height={200} className="w-52 h-52"></Image>
        </div>
        <div></div>
        <div className="absolute right-8 bottom-8">
            <PlusCircle className="text-fuchsia-900"></PlusCircle>
        </div>
    </div>
    );
}