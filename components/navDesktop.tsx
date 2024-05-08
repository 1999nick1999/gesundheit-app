import Link from "next/link";
import Image from "next/image";
import Gesundheit from "@/public/gesundheit.svg";
import NavLinks from "@/components/nav";

export default function NavDesktop() {
  return (
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
  );
}
