import Footer from "@/components/footer";

export default function Cart() {
  return (
    <main className="bg-gray-200 rounded-lg pt-20 overflow-hidden">
      <h2 className="text-fuchsia-900 px-20 mb-6">Cart</h2>
      <div className="w-full h-40 flex justify-center items-center mb-6">
        <p>Nothing in your cart</p>
      </div>
      <Footer />
    </main>
  );
}
