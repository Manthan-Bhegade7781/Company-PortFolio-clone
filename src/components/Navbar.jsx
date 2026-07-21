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
    <nav ref={navRef} className="sticky top-0 z-50 bg-black border-b border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-4">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-lg lg:text-3xl font-bold tracking-tight">
              <span className="text-white">Centennial</span>

              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="hidden lg:flex text-[10px] lg:text-xs uppercase tracking-[3px] text-gray-500 font-medium">
              Build Your Digital Identity
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
                <li key={link.name}>
                <a
                    href={link.href}
                    className="group relative inline-block text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
                >
                    {link.name}

                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </a>
                </li>
            ))}
            </ul>


            <div className="p-2 flex flex-row gap-2 ">
                {/* Desktop Button */}
                <button
                className="rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-700
                px-3 py-1.5 text-xs font-medium text-white transition hover:scale-105
                sm:px-4 sm:py-2 sm:text-sm
                lg:px-7 lg:py-3 lg:text-sm"
                >
                Go Premium
                </button>

                        {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
{menuOpen && (
  <div
    className="
      absolute
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

        </div>
    </div>
    )}
      </div>
    </nav>
  );
};

export default Navbar;