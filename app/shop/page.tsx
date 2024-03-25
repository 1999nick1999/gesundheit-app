import Footer from "@/components/footer"
import Product from "@/components/product"

export default function Shop() {

	const objects = [
	{
		colorFrom: "from-purple-200",
		colorTo: "to-purple-100",
		title: "Starter pack",
		oldPrice: "12,99",
		newPrice: "10,99",
		textArray: ["The essential cleanser", "The glow moisturiser"],
		image: "Products1",
		key: 1
	},
	{
		colorFrom: "from-fuchsia-200",
		colorTo: "to-fuchsia-100",
		title: "Flawless skin pack",
		oldPrice: "16,99",
		newPrice: "13,99",
		textArray: ["The essential cleanser", "The glow moisturiser", "The cristal exfoliator"],
		image: "Products2",
		key: 2
	}, 
	{
		colorFrom: "from-violet-200",
		colorTo: "to-violet-100",
		title: "Wellness pack",
		oldPrice: "24,99",
		newPrice: "18,99",
		textArray: ["The essential cleanser", "The glow moisturiser", "The cristal exfoliator", "The serene serum", "The twinning testers"],
		image: "Products3",
		key: 3
	},
	{
		colorFrom: "from-pink-200",
		colorTo: "to-pink-100",
		title: "Pack #4",
		oldPrice: "24,99",
		newPrice: "18,99",
		textArray: ["The essential cleanser", "The glow moisturiser", "The cristal exfoliator", "The twinning testers"],
		image: "Products2",
		key: 4
	},
	{
		colorFrom: "from-purple-200",
		colorTo: "to-purple-100",
		title: "Pack #5",
		oldPrice: "12,99",
		newPrice: "10,99",
		textArray: ["The essential cleanser", "The glow moisturiser"],
		image: "Products1",
		key: 5
	}
]

    return(
      <main className="bg-gray-200 rounded-lg pt-8 overflow-hidden">
      <h2 className="text-fuchsia-900 px-20">Select your subscription</h2>
			<div className="flex flex-wrap mb-10">
				{objects.map((object) => 
				<Product 
					colorFrom={object.colorFrom}
					colorTo={object.colorTo}
					title={object.title}
					oldPrice={object.oldPrice}
					newPrice={object.newPrice}
					textArray={object.textArray}
					image={object.image}
					key={object.key}
				/>
				)}
			</div>
      <Footer></Footer>
    </main>
    );
}