import Image from "next/image";
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import ".//globals.css";
import homePageImage from "/public/images/homePageImage.jpg"

export default function Home() {
  return (
    <main className="bg-gray-200 rounded-lg pt-8 overflow-hidden">
      <div className="bg-fuchsia-900 flex items-center px-20 py-4 justify-between">
        <h5 className="text-fuchsia-200">Sale! 20% off on all our subscriptions</h5>
        <Button className="bg-fuchsia-200 text-fuchsia-900 hover:bg-fuchsia-300">Go to shop</Button>
      </div>
      <div className="mt-10 mb-20 px-20">
        <h1 className="text-fuchsia-900 mb-6">Quality skincare on a student budget</h1> 
        <p className="text-gray-500">Unveil the secret to radiant, healthy skin without breaking the bank. At Gesundheit, we believe everyone deserves top-notch skincare tailored to their unique needs, regardless of their budget. Our mission is simple: to deliver premium quality skincare products at prices that won't weigh you down. \n Say goodbye to compromising on quality or sacrificing your savings for flawless skin. With Gesundheit, you can confidently embrace your skincare journey, knowing that affordability never means compromising on effectiveness or luxury.</p>
      </div>
      <Image src={homePageImage} alt="image of products"></Image>
      <div className="px-20 py-20 flex flex-col gap-8">
        <h2 className="text-fuchsia-900">How do we achieve this?</h2>
        <div className="flex gap-8">
          <div className="w-1/2 gap-2">
            <h4 className="text-gray-800">1. Only use social media marketing</h4>
            <p className="text-gray-500">Only creating awareness for our brand with social media is way less expensive for us and thus for you as well.</p>
          </div>
          <div className="w-1/2 h-40 rounded-2xl bg-fuchsia-700"></div>
        </div>
        <div className="flex flex-row-reverse gap-8">
          <div className="w-1/2 gap-2">
            <h4 className="text-gray-800">2. Keep it clean</h4>
            <p className="text-gray-500">No fancy ingredients or brand affiliations. We just use what works and create clean products.</p>
          </div>
          <div className="w-1/2 h-40 rounded-2xl bg-fuchsia-700"></div>
        </div>
        <div className="flex gap-8">
          <div className="w-1/2 gap-2">
            <h4 className="text-gray-800">3. Subscription based</h4>
            <p className="text-gray-500">By making our products subscription based we need to use less packaging procedures, this lowers production cost.</p>
          </div>
          <div className="w-1/2 h-40 rounded-2xl bg-fuchsia-700"></div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
