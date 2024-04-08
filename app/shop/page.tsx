import Footer from "@/components/footer";
import Product from "@/components/product";
import { fetchProducts } from "@/lib/data";
import { Products } from "@/lib/definitions";

export default async function Shop() {
  const products = await fetchProducts();

  //console.log(`These are the sql products ${JSON.stringify(products)}`);

  function checkValues(products: Products[]) {
    products.map((products) => console.log(products.productid.toString()));
  }

  checkValues(products);

  return (
    <main className="bg-gray-200 rounded-lg pt-20 overflow-hidden">
      <h2 className="text-fuchsia-900 px-20 mb-6">Select your subscription</h2>
      <div className="flex flex-wrap mb-10">
        {products.map((products, index) => (
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
      <div className="from-fuchsia-300 to-fuchsia-100 from-purple-300 to-purple-100 from-violet-300 to-violet-100 from-pink-300 to-pink-100 hidden"></div>
      <Footer></Footer>
    </main>
  );
}
