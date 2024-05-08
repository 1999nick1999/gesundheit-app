import GesundheitLogo from "@/public/gesundheit.svg";
import Image from "next/image";
import LoginForm from "@/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="h-20 w-full rounded-lg bg-fuchsia-700 p-3 md:h-36 flex justify-center items-center">
          <Image
            src={GesundheitLogo}
            alt="Logo Gesundheit"
            className="fill-fuchsia-600 text-fuchsia-600"
          />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
