import React from "react";
import { FaStar } from "react-icons/fa";

// Komponen Card Testimoni
const TestimonialCard = ({ image, name, role, quote, rating }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition transform hover:-translate-y-1 duration-300">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={`Photo of ${name}`}
          className="rounded-full w-14 h-14 object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div className="flex">
        {Array.from({ length: Math.floor(rating) }, (_, i) => (
          <FaStar key={i} className="text-yellow-400 text-xl" />
        ))}
        {rating % 1 !== 0 && <FaStar className="text-yellow-400 text-xl" />}
      </div>
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b3522b8-2813-45b8-b7a0-be0d8a5e5c52.png",
      name: "Adit Pratama",
      role: "Mahasiswa, Arka Institute",
      quote:
        "Belajar di Arka Institute bikin materi sulit jadi gampang. Dosen dan mentor-nya keren banget!",
      rating: 5,
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d4330e1-e6d2-46e1-91f6-e67b63ec4b63.png",
      name: "Rina Dewi",
      role: "Owner, Toko Buku Rina",
      quote:
        "Cetak buku & majalah di Mega Press Nusantara hasilnya selalu rapi, cepat, dan harga bersahabat.",
      rating: 5,
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cbb78fad-67dc-474c-a67b-fd9d15468dce.png",
      name: "Galang Putra",
      role: "Creative Director, Hookey Grafika Nusantara",
      quote:
        "Tim desainnya responsif & ide-ide mereka out of the box. Hasil desain selalu memuaskan klien.",
      rating: 4.5,
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cfa68672-348f-4a96-8225-932a09c1bd26.png",
      name: "Sinta Anggraini",
      role: "Marketing Manager, Nusa Agency",
      quote:
        "Sejak pakai jasa digital campaign Nusa Agency, brand awareness kami naik drastis.",
      rating: 5,
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cfa68672-348f-4a96-8225-932a09c1bd26.png",
      name: "Sinta Anggraini",
      role: "Marketing Manager, Nusa Agency",
      quote:
        "Sejak pakai jasa digital campaign Nusa Agency, brand awareness kami naik drastis.",
      rating: 5,
    },
    {
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cfa68672-348f-4a96-8225-932a09c1bd26.png",
      name: "Sinta Anggraini",
      role: "Marketing Manager, Nusa Agency",
      quote:
        "Sejak pakai jasa digital campaign Nusa Agency, brand awareness kami naik drastis.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-10 md:py-20 bg-white">
      <div className="mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Apa Kata Klien Kami
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <TestimonialCard
              key={i}
              image={item.image}
              name={item.name}
              role={item.role}
              quote={item.quote}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
