"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="px-6 py-20 md:py-28 flex flex-col-reverse lg:flex-row gap-10 justify-center items-center overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-xl"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Bersama{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Arka Corp
          </span>
          , Bangun Masa Depan{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Pendidikan
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Kreatif Indonesia
          </span>
        </h1>

        <p className="text-gray-600 text-lg text-justify">
          PT Arka Mega Nusantara adalah grup usaha anak muda yang bergerak di
          bidang pendidikan, percetakan, grafika, dan agensi. Kami tumbuh
          bersama generasi kreatif untuk membangun Indonesia lebih baik.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition shadow-md"
          >
            Kenali Kami
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg transition shadow-md"
          >
            Pelajari Selengkapnya
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="perspective">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cfa68672-348f-4a96-8225-932a09c1bd26.png"
            alt="Tim Arka"
            className="rounded-xl shadow-2xl object-cover w-full max-w-md transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "rotateY(12deg) rotateX(6deg) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "rotateY(0deg) rotateX(0deg) scale(1)";
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
