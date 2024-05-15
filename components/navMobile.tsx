import Link from "next/link";
import Image from "next/image";
import Gesundheit from "@/public/gesundheit.svg";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  ShoppingBag,
  LayoutList,
  Mails,
  User,
  ShoppingCart,
} from "lucide-react";

export default function NavMobile() {
  return (
    <header className="fixed bg-white z-50">
      <div className="flex w-screen px-8 py-6 h-24 xl:hidden gap-4">
        <Link href={"/"} className="w-full">
          <div className="rounded-lg bg-fuchsia-700 w-full h-full mb-4 flex justify-center items-center">
            <Image
              src={Gesundheit}
              alt="logo gesundheit"
              className="h-16 py-4"
            ></Image>
          </div>
        </Link>
        <div className="flex flex-col gap-2 aspect-square">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon className="bg-fuchsia-200 text-fuchsia-700 rounded-xl h-12 w-full p-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-8 mt-2">
              <DropdownMenuItem asChild>
                <Link href={"/"}>
                  <Home className="w-4 mr-2" />
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"/shop"}>
                  <ShoppingBag className="w-4 mr-2" />
                  Shop
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"/about"}>
                  <LayoutList className="w-4 mr-2" />
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"/contact"}>
                  <Mails className="w-4 mr-2" />
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"/account"}>
                  <User className="w-4 mr-2" />
                  Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"/cart"}>
                  <ShoppingCart className="w-4 mr-2" />
                  Cart
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
