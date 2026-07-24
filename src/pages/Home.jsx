import Navbar from "../components/HomePage/Navbar";
import Hero from "../components/HomePage/Hero";
import WhyPortfolio from "../components/HomePage/WhyPortfolio";
import Features from "../components/HomePage/Features";
import Pricing from "../components/HomePage/Pricing";
import FAQ from "../components/HomePage/FAQ";
import BackToTop from "../components/BackToTop"


export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-[Poppins]">
      <Navbar />
      <Hero />
      <WhyPortfolio />
      <Features />
      <Pricing />
      <FAQ />
      <BackToTop />
    </div>
  );
}