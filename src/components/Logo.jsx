import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { logos } from "../assets/index";

export default function LogoCarousel() {
  return (
    <section className="relative py-12 md:pb-16 bg-white z-0">
      <h2 className="text-2xl p-4 bg-gradient-to-r from-blue-600 to-purple-600 md:bg-none md:text-3xl font-bold text-center mb-20 md:mb-32 text-white sm:text-gray-900">
        Dipercaya oleh Perusahaan Terkemuka
      </h2>
      <div className="mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="logo-carousel"
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center mb-20 "
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="object-contain h-14"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
