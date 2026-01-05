import Breadcrumb from "./components/Breadcrumb";
import ProductGallery from "./components/ProductGallery";
import ProductDetailRow from "./components/ProductDetailRow";
import OuterwearBanner from "./components/OuterwearBanner";
import ProductInfoSection from "./components/ProductInfoSection";
import OverlayCoatSection from "./components/OverlayCoatSection";
import ReviewsSection from "./components/ReviewsSection";
import RelatedProductsSection from "./components/RelatedProductsSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto shadow-2xl rounded-3xl px-6 py-8 bg-white">
      <Navbar />

      <div className="px-6 py-8 bg-gradient-to-b from-blue-300 to-white">
        <Breadcrumb />
        <ProductGallery />
        <ProductDetailRow />
        <br />  {/* valid */}
        <OuterwearBanner />
      </div>

      {/* FIXED ASSET PATH */}
      <section className="w-full">
        <Image
          src="/assets/banner.png"  // Image should exist in public/assets/banner.png
          alt="Outerwear Banner"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </section>

      <div className="bg-gradient-to-b from-white to-blue-300">
        <ProductInfoSection />
        <OverlayCoatSection />
        <ReviewsSection />
        <RelatedProductsSection />
      </div>

      <div className="bg-gradient-to-b from-blue-300 to-white px-6 py-8">
        <Footer />
      </div>
    </main>
  );
}
