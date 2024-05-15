import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Gesundheit from "/public/gesundheit.svg";
import Image from "next/image";
import { Nunito } from "next/font/google";
import NavLinks from "@/components/nav";
import NavDesktop from "@/components/navDesktop";
import NavMobile from "@/components/navMobile";
import { SessionProvider } from "next-auth/react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gesundheit",
  description: "Cosmetics company webshop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`${nunito.className} flex justify-center overflow-y-scroll`}
        >
          <div className="max-w-screen-2xl w-full">
            <NavDesktop />
            <div className="w-full flex justify-center">
              <NavMobile />
            </div>
            <div className="px-8 xl:px-80 py-28 xl:py-20">{children}</div>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
