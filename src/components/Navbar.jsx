import { useState } from "react";
import { useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
        name: "Get Started",
        href: "#home",
    },
    {
        name: "Features",
        href: "#features",
    },
    {
        name: "Pricing",
        href: "#pricing",
    },
    {
        name: "FAQ",
        href: "#faq",
    },
    ];

    const navRef = useRef(null);

    useEffect(() => {
    function handleClickOutside(event) {
        if (
        navRef.current &&
        !navRef.current.contains(event.target)
        ) {
        setMenuOpen(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-black border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-9">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              <span className="text-white">Centennial</span>

              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="text-[10px] lg:text-xs uppercase tracking-[3px] text-gray-500 font-medium">
              Build Your Digital Identity
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
                <li key={link.name}>
                <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition duration-300"
                >
                    {link.name}
                </a>
                </li>
            ))}
            </ul>

          {/* Desktop Button */}
          <button className="hidden lg:block px-3 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition text-sm">
            Go Premium
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
{menuOpen && (
  <div
    className="
      absolute
      left-0
      top-full
      w-full
      bg-black
      border-t
      border-gray-800
      shadow-2xl
      lg:hidden
      animate-in
      slide-in-from-top-2
      duration-300
    "
  >
    <div className="px-5 py-6">

        <ul className="flex flex-col gap-6">

            {navLinks.map((link) => (
            <li key={link.name}>
                <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-white transition"
                >
                {link.name}
                </a>
            </li>
            ))}

        </ul>

        <button
            onClick={() => setMenuOpen(false)}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-semibold text-white"
        >
            Go Premium
        </button>

        </div>
    </div>
    )}
      </div>
    </nav>
  );
};

export default Navbar;