import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r w-auto from-blue-600 to-purple-600 text-white py-10 px-6">
      <div className="mx-auto grid md:grid-cols-4 gap-10 md:gap-20 md:items-center">
        <div >
          <img
            src="arka.jpeg"
            alt="Company logo in white"
            className="h-10 mb-6"
          />
          <p className="text-gray-200 mb-6">
            Membangun masa depan pengalaman digital untuk bisnis segala ukuran.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-200 hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 col-span-3">
          <div>
            <h4 className="font-semibold text-lg mb-6">Perusahaan</h4>
            <ul className="md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Karier
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6">Produk</h4>
            <ul className="md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Dokumentasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Integrasi
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-lg mb-6">Kontak</h4>
            <address className="not-italic text-gray-200">
              <p className="md:mb-3">
                123 Business Ave, Suite 300 Jatinangor, CA 94107
              </p>
              <p className="md:mb-3">hello@company.com +1 (800) 123-4567</p>
            </address>
          </div>
        </div>
      </div>
      <div className="mx-auto border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-100 text-sm mb-4 md:mb-0">
          Copy Right © 2025 Denz Tech. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-100 hover:text-gray-200 text-sm transition"
          >
            Kebijakan Privasi
          </a>
          <a
            href="#"
            className="text-gray-100 hover:text-gray-200 text-sm transition"
          >
            Ketentuan Layanan
          </a>
          <a
            href="#"
            className="text-gray-100 hover:text-gray-200 text-sm transition"
          >
            Kebijakan Cookie
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
