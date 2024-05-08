import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Gesundheit from "/public/gesundheit.svg";
import Image from "next/image";
import { Nunito } from "next/font/google";
import NavLinks from "@/components/nav";
import { SessionProvider } from "next-auth/react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gesundheit",
  description: "Cosmetics company webshop",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`${nunito.className} flex justify-center overflow-y-scroll`}
        >
          <div className="max-w-screen-2xl w-full">
            <header className="fixed left-10 top-20 gap-8">
              <Link href={"/"}>
                <div className="w-60 h-40 rounded-lg bg-fuchsia-700 mb-4 flex justify-center items-center">
                  <Image
                    src={Gesundheit}
                    alt="logo gesundheit"
                    className="w-36"
                  ></Image>
                </div>
              </Link>
              <div className="flex flex-col gap-2">
                <NavLinks />
              </div>
            </header>
            <div className="px-80 py-20">{children}</div>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
