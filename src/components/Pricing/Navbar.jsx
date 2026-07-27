import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Try Demo", path: "/demo" },
    { name: "Use Trial", path: "/trial" },
    { name: "Features", path: "/features" },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto h-15 lg:h-15  flex items-center px-3 lg:pe-28 justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg sm lg:text-3xl font-extrabold tracking-tight whitespace-nowrap"
        >
          <span className="text-white">Centennial</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[22px] transition-colors ${
                  isActive
                    ? "text-white hover:text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <nav className="flex flex-col py-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 text-lg ${
                    isActive
                      ? "text-white hover:bg-zinc-900"
                      : "text-white hover:bg-zinc-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;