import Image from "next/image";
import aboutPhoto from "/public/images/aboutPhoto.jpg";
import Footer from "@/components/footer";

export default function About() {
  return (
    <main className="bg-gray-200 rounded-lg pt-8 xl:pt-20 overflow-hidden">
      <h2 className="px-8 xl:px-20 text-fuchsia-900 mb-6">
        Hello we are Gesundheit
      </h2>
      <p className="px-8 xl:px-20 text-gray-500">
        Welcome to Gesundheit, where beauty meets simplicity. At Gesundheit,
        we&aposre passionate about providing top-notch skincare solutions
        without the fuss. Our mission is clear: to offer high-quality products
        at prices that won&apost break the bank.
        <br />
        <br />
        Founded with the belief that skincare should be straightforward and
        accessible to all, Gesundheit caters to the needs of the modern woman.
        Whether you&aposre a busy student juggling classes or a young
        professional on the go, our products are designed to fit seamlessly into
        your routine, delivering results you can see and feel.
        <br />
        <br />
        From refreshing cleansers to nourishing moisturizers, each Gesundheit
        product is carefully formulated to address common skincare concerns with
        efficacy and ease. We believe in the power of simplicity – no gimmicks,
        just straightforward ingredients that work.
        <br />
        <br />
        Join the Gesundheit community and discover skincare that&aposs as
        affordable as it is effective. Because when it comes to beauty, everyone
        deserves to feel confident and radiant, every day.
      </p>
      <Image
        src={aboutPhoto}
        alt="Photo of our team"
        className="w-full my-8 xl:my-20"
      ></Image>
      <h2 className="px-8 xl:px-20 text-fuchsia-900 mb-6">Meet our team</h2>
      <p className="px-8 xl:px-20 text-gray-500 mb-20">
        Meet the vibrant team behind Gesundheit – a dynamic group of young
        individuals united by their passion for skincare and commitment to
        excellence. Diverse in backgrounds and talents, our team brings a wealth
        of creativity, innovation, and energy to everything we do.
        <br />
        <br />
        From product development to customer care, each member of the Gesundheit
        team plays a vital role in bringing our vision to life. We thrive on
        collaboration, drawing inspiration from our varied perspectives to
        create skincare solutions that resonate with our diverse community of
        customers.
        <br />
        <br />
        At Gesundheit, we celebrate inclusivity and embrace the richness of our
        differences. With boundless enthusiasm and a shared dedication to
        quality, our team is dedicated to crafting skincare products that
        empower and uplift – because beauty knows no bounds when diversity leads
        the way.
      </p>
      <Footer />
    </main>
  );
}
