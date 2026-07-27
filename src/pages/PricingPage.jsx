import Navbar from "../components/Pricing/Navbar";
import Price from "../components/Pricing/Price";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-20">
        <Price />
      </main>
    </div>
  );
};

export default PricingPage;