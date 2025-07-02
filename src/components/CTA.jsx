import React from "react";

function CTA() {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 border-b border-white">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Bersama Arka Corp, Wujudkan Mimpi & Kembangkan Bisnis Anda
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Bergabunglah dengan Arka Corp — ekosistem kreatif untuk pendidikan,
          percetakan, grafika, agensi digital, dan inkubasi bisnis. Mari
          berkolaborasi membangun masa depan Indonesia yang lebih baik.
        </p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition shadow-lg">
          Ayo Kolaborasi Bersama Kami
        </button>
      </div>
    </section>
  );
}

export default CTA;
