import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link"
import Gesundheit from "/public/gesundheit.svg"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { Home, ShoppingBag, LayoutList, Mails, User, ShoppingCart } from "lucide-react"
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Gesundheit",
  description: "Cosmetics company webshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ nunito.className } flex justify-center`}>
        <div className="max-w-screen-2xl">
          <header className="fixed left-10 top-20 gap-8">
            <Link href={"/"}>
              <div className="w-60 h-40 rounded-lg bg-fuchsia-700 mb-4 flex justify-center items-center">
                <Image src={Gesundheit} alt="logo gesundheit" className="w-36"></Image>
              </div>
            </Link>
            <div className="flex flex-col gap-2">
              <Link href={"/"}><Button className="w-60 justify-start bg-gray-200 text-gray-700 hover:bg-fuchsia-200 hover:text-fuchsia-700"><Home className="mr-2 h-4 w-4" /> Home</Button></Link>
              <Link href={"/"}><Button className="w-60 justify-start bg-gray-200 text-gray-700 hover:bg-fuchsia-200 hover:text-fuchsia-700"><ShoppingBag className="mr-2 h-4 w-4" /> Shop</Button></Link>
              <Link href={"/"}><Button className="w-60 justify-start bg-gray-200 text-gray-700 hover:bg-fuchsia-200 hover:text-fuchsia-700"><LayoutList className="mr-2 h-4 w-4" /> About us</Button></Link>
              <Link href={"/"}><Button className="w-60 justify-start bg-gray-200 text-gray-700 hover:bg-fuchsia-200 hover:text-fuchsia-700"><Mails className="mr-2 h-4 w-4" /> Contact</Button></Link>
              <Link href={"/"}><Button className="w-60 justify-start bg-gray-200 text-gray-700 hover:bg-fuchsia-200 hover:text-fuchsia-700"><User className="mr-2 h-4 w-4" /> Account</Button></Link>
              <Link href={"/"}><Button className="w-60 justify-start bg-gray-200 text-gray-700 hover:bg-fuchsia-200 hover:text-fuchsia-700"><ShoppingCart className="mr-2 h-4 w-4" /> Cart</Button></Link>
            </div>
          </header>
          <div className="px-80 py-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
