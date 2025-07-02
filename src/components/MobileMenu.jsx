export default function MobileMenu() {
  const closeMenu = () => {
    document.querySelector(".mobile-menu").classList.add("hidden");
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 hidden mobile-menu items-center justify-center">
      <div className="absolute top-6 right-6">
        <button onClick={closeMenu} className="close-menu text-white text-3xl">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="text-center space-y-8">
        <a
          href="#home"
          className="block text-2xl text-white hover:text-blue-400 transition"
        >
          Home
        </a>
        <a
          href="#features"
          className="block text-2xl text-white hover:text-blue-400 transition"
        >
          Features
        </a>
        <a
          href="#testimonials"
          className="block text-2xl text-white hover:text-blue-400 transition"
        >
          Testimonials
        </a>
        <a
          href="#pricing"
          className="block text-2xl text-white hover:text-blue-400 transition"
        >
          Pricing
        </a>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition">
          Login
        </button>
      </div>
    </div>
  );
}
