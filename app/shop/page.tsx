import Footer from "@/components/footer";
import Product from "@/components/product";
import { fetchProducts } from "@/lib/data";
import { fetchShopPages } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import Search from "@/components/search";
import { Suspense } from "react";
import Pagination from "@/components/ui/pagination";

export default async function Shop({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const products = await fetchProducts(query, currentPage);
  const totalPages = await fetchShopPages(query);

  return (
    <main className="bg-gray-200 rounded-lg pt-20 overflow-hidden">
      <h2 className="text-fuchsia-900 px-20 mb-6">Select your subscription</h2>
      <div className="px-20 py-8 flex flex-col gap-3 text-gray-800">
        <Search placeholder="Search..." />
      </div>
      <div className="px-20">
        <Separator className="mb-4 bg-gray-300" />
      </div>
      <div className="flex flex-wrap mb-10">
        <Suspense key={query + currentPage} fallback={<p />}>
          {products.map((products) => (
            <Product
              colorFrom={products.colorfrom}
              colorTo={products.colorto}
              title={products.title}
              oldPrice={products.oldprice}
              newPrice={products.newprice}
              textArray={products.textarray}
              image={products.imageurl}
              color={products.color}
              key={products.productid}
              query={query}
              currentPage={currentPage}
            />
          ))}
        </Suspense>
        <div className="mt-5 px-20 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <div className="from-fuchsia-300 to-fuchsia-100 from-purple-300 to-purple-100 from-violet-300 to-violet-100 from-pink-300 to-pink-100 hidden"></div>
      <Footer></Footer>
    </main>
  );
}
