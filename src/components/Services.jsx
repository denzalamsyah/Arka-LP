import { MdSchool } from "react-icons/md";
import { IoPrintSharp, IoBusinessSharp } from "react-icons/io5";
import { SiCssdesignawards } from "react-icons/si";
import { FaMagento } from "react-icons/fa";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { useEffect, useState } from "react";

const services = [
  {
    icon: <MdSchool className="text-blue-600 text-4xl" />,
    bg: "bg-blue-100",
    title: "Pendidikan & Pelatihan",
    desc: "Program pelatihan, kursus, dan pendidikan melalui Arka Institute.",
    anim: "animate-fadeRight",
  },
  {
    icon: <IoPrintSharp className="text-purple-600 text-4xl" />,
    bg: "bg-purple-100",
    title: "Percetakan & Penerbitan",
    desc: "Layanan percetakan dan penerbitan buku bersama Mega Press Nusantara.",
    anim: "animate-fadeLeft",
  },
  {
    icon: <SiCssdesignawards className="text-green-600 text-4xl" />,
    bg: "bg-green-100",
    title: "Desain & Grafika",
    desc: "Desain kreatif dan branding visual melalui Hookey Grafika Nusantara.",
    anim: "animate-fadeRight",
  },
  {
    icon: <FaMagento className="text-yellow-600 text-4xl" />,
    bg: "bg-yellow-100",
    title: "Digital Agency",
    desc: "Layanan digital marketing & pengelolaan brand melalui Nusa Agency.",
    anim: "animate-fadeLeft",
  },
  {
    icon: <LiaNetworkWiredSolid className="text-red-600 text-4xl" />,
    bg: "bg-red-100",
    title: "Holding Management",
    desc: "Mengelola grup usaha Arka Corp agar terus berkembang berkelanjutan.",
    anim: "animate-fadeRight",
  },
  {
    icon: <IoBusinessSharp className="text-indigo-600 text-4xl" />,
    bg: "bg-indigo-100",
    title: "Inkubasi Bisnis",
    desc: "Dukungan untuk startup & bisnis baru agar tumbuh bersama Arka Corp.",
    anim: "animate-fadeLeft",
  },
];

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="services"
      className="py-10 md:py-20 bg-gray-50 flex justify-center items-center"
    >
      <div className="px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Arka Corp menghadirkan berbagai layanan untuk mendukung pertumbuhan
            bisnis dan pendidikan di Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-md transition-transform duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                service.anim
              } ${scrolled ? "transition-transform duration-500" : ""}`}
            >
              <div
                className={`w-14 h-14 ${service.bg} rounded-lg flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
