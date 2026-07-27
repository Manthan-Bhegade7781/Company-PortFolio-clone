import Navbar from "../components/Support/Navbar";
import SupportHero from "../components/Support/SupportHero";
import SupportCard from "../components/Support/SupportCard";
import ResponseTimes from "../components/Support/ResponseTimes";

const Support = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-20">
        <SupportHero />

        <div className="max-w-7xl mx-auto px-6 space-y-10 pb-20 ">

          <SupportCard/>

          <ResponseTimes />
        </div>
      </main>
    </div>
  );
};

export default Support;