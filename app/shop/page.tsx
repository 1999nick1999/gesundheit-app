import Footer from "@/components/footer";
import Product from "@/components/product";
import { fetchProducts } from "@/lib/data";

export default async function Shop() {
  const products = await fetchProducts();

  return (
    <main className="bg-gray-200 rounded-lg pt-20 overflow-hidden">
      <h2 className="text-fuchsia-900 px-20 mb-6">Select your subscription</h2>
      <div className="flex flex-wrap mb-10">
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
          />
        ))}
      </div>
      <Footer></Footer>
    </main>
  );
}
