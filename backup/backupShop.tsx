import Footer from "@/components/footer";
import Product from "@/components/product";
import { fetchProducts } from "@/lib/data";

export default async function Shop() {
  // const objects = [
  //   {
  //     colorFrom: "from-purple-300",
  //     colorTo: "to-purple-100",
  //     title: "Starter pack",
  //     oldPrice: "12,99",
  //     newPrice: "10,99",
  //     textArray: ["The essential cleanser", "The glow moisturiser"],
  //     image: "Products1",
  //     color: "slate-500",
  //     key: 1,
  //   },
  //   {
  //     colorFrom: "from-fuchsia-300",
  //     colorTo: "to-fuchsia-100",
  //     title: "Flawless skin pack",
  //     oldPrice: "16,99",
  //     newPrice: "13,99",
  //     textArray: [
  //       "The essential cleanser",
  //       "The glow moisturiser",
  //       "The cristal exfoliator",
  //     ],
  //     image: "Products2",
  //     color: "slate-500",
  //     key: 2,
  //   },
  //   {
  //     colorFrom: "from-violet-300",
  //     colorTo: "to-violet-100",
  //     title: "Wellness pack",
  //     oldPrice: "24,99",
  //     newPrice: "18,99",
  //     textArray: [
  //       "The essential cleanser",
  //       "The glow moisturiser",
  //       "The cristal exfoliator",
  //       "The serene serum",
  //       "The twinning testers",
  //     ],
  //     image: "Products3",
  //     color: "slate-500",
  //     key: 3,
  //   },
  //   {
  //     colorFrom: "from-pink-300",
  //     colorTo: "to-pink-100",
  //     title: "Pack #4",
  //     oldPrice: "24,99",
  //     newPrice: "18,99",
  //     textArray: [
  //       "The essential cleanser",
  //       "The glow moisturiser",
  //       "The cristal exfoliator",
  //       "The twinning testers",
  //     ],
  //     image: "Products2",
  //     color: "slate-500",
  //     key: 4,
  //   },
  //   {
  //     colorFrom: "from-purple-300",
  //     colorTo: "to-purple-100",
  //     title: "Pack #5",
  //     oldPrice: "12,99",
  //     newPrice: "10,99",
  //     textArray: ["The essential cleanser", "The glow moisturiser"],
  //     image: "Products1",
  //     color: "slate-500",
  //     key: 5,
  //   },
  // ];

  const query = "";
  const currentPage = 1;

  const products = await fetchProducts(query, currentPage);

  // console.log(objects);
  console.log(products);

  return (
    <main className="bg-gray-200 rounded-lg pt-20 overflow-hidden">
      <h2 className="text-fuchsia-900 px-20 mb-6">Select your subscription</h2>
      {/* <div className="flex flex-wrap mb-10">
        {objects.map((object) => (
          <Product
            colorFrom={object.colorFrom}
            colorTo={object.colorTo}
            title={object.title}
            oldPrice={object.oldPrice}
            newPrice={object.newPrice}
            textArray={object.textArray}
            image={object.image}
            color={object.color}
            key={object.key}
          />
        ))}
      </div> */}

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
            query={query}
            currentPage={currentPage}
          />
        ))}
      </div>

      <Footer></Footer>
    </main>
  );
}
