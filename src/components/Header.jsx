import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 bg-white/80 py-4 px-6 lg:px-16 ${
        scrolled ? "backdrop-blur shadow" : ""
      }`}
    >
      <div className="mx-auto flex justify-between items-center">
        <img src="arka.svg" alt="Logo" className="h-10" />
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

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
            Login
          </button>
        </div>
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() =>
            document.querySelector(".mobile-menu").classList.remove("hidden")
          }
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
