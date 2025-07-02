import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
import { MdCancel } from "react-icons/md";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menu = [
    {
      name: "About",
      id: "#home",
    },
    {
      name: "Services",
      id: "#services",
    },
    {
      name: "Testimonials",
      id: "#testimonials",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 bg-white/80 py-2 px-6 lg:px-16 ${
        scrolled ? "backdrop-blur shadow" : ""
      }`}
    >
      <div className="mx-auto md:gap-5 flex justify-between items-center md:border md:border-gray-600 md:rounded-full md:max-w-[600px] md:justify-center">
        <img src="arka.svg" alt="Logo" className="h-14" />
        <div className="hidden md:flex items-center space-x-10">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Testimonials
          </a>

          <button className="bg-none border hover:border-none border-gray-900 hover:bg-gradient-to-r w-auto from-blue-600 to-purple-600 hover:text-white  text-gray-900 font-bold px-6 py-1 rounded-lg transition">
            Login
          </button>
        </div>
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="fas fa-bars">
            <GiHamburgerMenu />
          </i>
        </button>
        {showMenu && (
          <div className="absolute h-screen top-0 left-0 w-full bg-blue-800 bg-opacity-95 z-30 flex flex-col items-center justify-center space-y-6 text-white">
            <button
              className="absolute top-5 right-5 text-3xl text-white"
              onClick={() => setShowMenu(false)}
            >
              <MdCancel />
            </button>
            <h2 className="text-2xl font-semibold mb-6">My Menus</h2>

            {/* Menu items */}
            {menu.map((item, index) => (
              <MobileMenu
                key={index}
                name={item.name}
                Id={item.id}
                toggle={!showMenu}
                onClick={() => setShowMenu(false)}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
