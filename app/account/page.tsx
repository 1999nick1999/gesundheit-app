import { signOut } from "@/auth";
import { LogOut, PencilIcon } from "lucide-react";
import { auth } from "@/auth";
import Footer from "@/components/footer";

interface sessionObject {
  user: { name: String; email: String };
  expires: String;
}

export default async function Account() {
  const session: sessionObject | null = await auth();

  return (
    <main className="bg-gray-200 rounded-lg pt-8 xl:pt-20 overflow-hidden w-full">
      <div className="px-8 xl:px-20 mb-20">
        <h2 className="text-fuchsia-900">Account</h2>
        <div className="flex flex-col gap-2 mt-8">
          <h4 className="text-gray-900">Username</h4>
          <div className="flex gap-2">
            <p className="h-10 px-4 py-2 bg-white rounded-md w-full">
              {session?.user.name}
            </p>
            <div className="text-white h-10 px-4 py-2 bg-fuchsia-900 rounded-md hover:bg-fuchsia-900/90 flex gap-2 cursor-pointer duration-150 ease-out">
              <PencilIcon />
              <p className="hidden xl:block">Edit</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <h4 className="text-gray-900">Email</h4>
          <div className="flex gap-2">
            <p className="h-10 px-4 py-2 bg-white rounded-md w-full">
              {session?.user.email}
            </p>
            <div className="text-white h-10 px-4 py-2 bg-fuchsia-900 rounded-md hover:bg-fuchsia-900/90 flex gap-2 cursor-pointer duration-150 ease-out">
              <PencilIcon />
              <p className="hidden xl:block">Edit</p>
            </div>
          </div>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
          className="mt-10"
        >
          <button className="inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            <LogOut className="w-6" />
            <div className="block">Sign Out</div>
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
