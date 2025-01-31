import React from "react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-red-100 rounded-2xl py-10 px-5 text-center md:text-left md:grid md:grid-cols-[3fr_1fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-2 max-w-md mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            <span className="text-red-500">We</span> are committed to providing
            the highest quality fresh flowers
          </h1>
          <p className="text-md text-gray-700">
            Because we understand that the freshness and beauty of flowers are
            important for every occasion.
          </p>
        </div>
        <div className="flex justify-center md:justify-end gap-6 mt-4 md:mt-0">
          <a
            href="https://wa.me/+201030152903"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl hover:text-green-600 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100077411983407&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl hover:text-blue-700 transition-colors"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div>
        <p className="text-sm text-center py-5 text-gray-700">
          Copyright 2024 @ deflore.com - All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
