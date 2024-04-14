"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search as MagnifyingGlassIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <div className="relative flex flex-1 flex-shrink-0">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          className="pl-10"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    </>
  );
}
