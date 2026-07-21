import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;

      if (window.scrollY > heroHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed -right-4 bottom-12 z-50 transition-all duration-500 
        ${
        showButton
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="w-25 h-20 rounded-bl-full rounded-tl-full bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">

        <span className="text-lg flex font-semibold items-center p-1">
          Go to
        <br />
        top
        </span>

      </div>
    </button>
  );
};

export default BackToTop;