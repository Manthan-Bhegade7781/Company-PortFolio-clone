import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import WhyPortfolio from "../components/WhyPortfolio";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-[Poppins]">
      <Navbar />
      <Hero />
      <WhyPortfolio />
      <Features />
      <Pricing />
      <FAQ />
    </div>
  );
}