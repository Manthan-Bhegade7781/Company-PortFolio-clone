import About from "../components/Portfoliodemo/About";
import Contact from "../components/Portfoliodemo/Contact";
import Footer from "../components/Portfoliodemo/Footer";
import Hero from "../components/Portfoliodemo/Hero";
import Navbar from "../components/Portfoliodemo/Navbar";
import Projects from "../components/Portfoliodemo/Projects";
import Skills from "../components/Portfoliodemo/Skills";

const PortfolioDemo = () => {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default PortfolioDemo;