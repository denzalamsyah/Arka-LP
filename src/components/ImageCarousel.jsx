import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ImageCarousel() {
  const slides = [
    {
      title: "Kolaborasi Tim Kreatif",
      desc: "Tim muda dan energik Arka Corp siap mewujudkan ide-ide terbaik.",
      img: "teamwork.webp",
    },
    {
      title: "Suasana Meeting",
      desc: "Diskusi strategis bersama klien untuk hasil optimal.",
      img: "client.webp",
    },
    {
      title: "Proses Percetakan",
      desc: "Dukungan percetakan modern dan hasil berkualitas.",
      img: "book.webp",
    },
    {
      title: "Desain & Grafika",
      desc: "Visual branding yang menarik bersama tim grafis kami.",
      img: "work.webp",
    },
    {
      title: "Pelatihan & Edukasi",
      desc: "Pelatihan dan kursus melalui Arka Institute.",
      img: "client.webp",
    },
    {
      title: "Gabung Bersama Kami",
      desc: "Mari bertumbuh bersama Arka Corp untuk Indonesia lebih baik.",
      img: "company.webp",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="w-full h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-white max-w-2xl">{slide.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
