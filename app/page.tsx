import Image from "next/image";
import { Button } from "@/components/ui/button"
import nextJS from "/public/next.svg"

export default function Home() {
  return (
    <main className="bg-gray-200 rounded-lg">
      <div>
        <h5>Sale! 20% off on all our subscriptions</h5>
        <Button variant="outline">Go to shop</Button>
      </div>
      <h1>Quality skincare on a student budget</h1> 
      <p>Unveil the secret to radiant, healthy skin without breaking the bank. At Gesundheit, we believe everyone deserves top-notch skincare tailored to their unique needs, regardless of their budget. Our mission is simple: to deliver premium quality skincare products at prices that won't weigh you down. \n Say goodbye to compromising on quality or sacrificing your savings for flawless skin. With Gesundheit, you can confidently embrace your skincare journey, knowing that affordability never means compromising on effectiveness or luxury.</p>
      <Image src={nextJS} alt="logo of nextjs"></Image>
      <h2>How do we achieve this?</h2>
      <h4>1. Only use social media marketing</h4>
      <p>Only creating awareness for our brand with social media is way less expensive for us and thus for you as well.</p>
      <div className="w-80 h-40 rounded-2xl bg-fuchsia-700"></div>
      <h4>2. Keep it clean</h4>
      <p>No fancy ingredients or brand affiliations. We just use what works and create clean products.</p>
      <div className="w-80 h-40 rounded-2xl bg-fuchsia-700"></div>
      <h4>3. Subscription based</h4>
      <p>By making our products subscription based we need to use less packaging procedures, this lowers production cost.</p>
      <div className="w-80 h-40 rounded-2xl bg-fuchsia-700"></div>
    </main>
  );
}
