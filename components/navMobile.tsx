import Link from "next/link";
import Image from "next/image";
import Gesundheit from "@/public/gesundheit.svg";
import NavLinks from "@/components/nav";

export default function NavMobile() {
  return (
    <header className="flex mt-20 mb-2">
      <Link href={"/"}>
        <div className="rounded-lg bg-fuchsia-700 mb-4 flex justify-center items-center">
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
