import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shadow ? "shadow-lg" : ""
      } bg-[#0B132B]`}
    >
      <div className="max-w-7xl mx-auto h-14 lg:h-22 px-4 lg:px-1 flex items-center justify-between">
        {/* Logo */}

        <h1 className="text-white text-lg lg:text-2xl font-bold">
          Portfolio
        </h1>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-lg font-normal hover:text-cyan-400 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-2 md:gap-3">
          {/* Settings */}

          <button className="w-9 h-9 md:w-17 md:h-10 rounded-full lg:rounded-lg bg-violet-600 hover:bg-violet-700 transition flex items-center justify-center text-white">
            <FiSettings size={16} />
          </button>

          {/* Premium */}

          <button className=" transition bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 text-white lg:text-black lg:bg-amber-400 font-bold text-[11px] md:text-xs px-3 lg:px-4 py-3 rounded-full lg:rounded-lg whitespace-nowrap">
            Go Premium
          </button>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden bg-[#0B132B] transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white text-base hover:text-cyan-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;