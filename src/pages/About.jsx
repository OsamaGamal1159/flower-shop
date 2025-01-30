import React from "react";

import bg_about_1 from "../assets/about/about-img-1.jpg";
import bg_about_2 from "../assets/about/about-img-2.jpg";
import bg_about_3 from "../assets/about/about-img-3.jpg";
import { GiButterflyFlower } from "react-icons/gi";
import { GiFlowerPot } from "react-icons/gi";
import { TbHandClick } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";

function About() {
  return (
    <div className="mb-20 text-gray-800">
      <div className="grid grid-cols-2 gap-4 mb-12">
        <div
          className="w-full h-[520px] bg-cover bg-center bg-no-repeat bg-red-300"
          style={{ backgroundImage: `url(${bg_about_1})` }}
        ></div>
        <div className="grid grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat bg-red-300"
              style={{ backgroundImage: `url(${bg_about_2})` }}
            ></div>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat bg-red-300"
              style={{ backgroundImage: `url(${bg_about_3})` }}
            ></div>
          </div>
          <h3 className="text-red-400 text-8xl font-bold leading-9 flex justify-center items-center bg-red-100 lobster-regular">
            About Me.
          </h3>
        </div>
      </div>
      <div className="text-lg py-8 px-7 leading-9 bg-red-100 mb-10">
        <p>
          <span className="text-3xl font-bold text-red-400">
            At Ahmed Flowers,
          </span>{" "}
          We believe that flowers are more than just decorations - they are
          symbols of love, happiness, and life's most cherished moments. Our
          mission is to provide our customers with the freshest, most glamorous
          flowers that inspire joy and transform any occasion into something
          truly spectacular.
        </p>
      </div>
      <div className="px-5 text-2xl font-bold">Why Choose Us?</div>
      <hr className="w-[90px] h-[5px] bg-red-400 border-none my-4 mb-4 ml-5" />
      <div className="grid grid-cols-5 divide-x-2 divide-gray-200 text-sm">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-2 items-end">
            <h4 className="font-medium text-lg">Freshness Guaranteed</h4>
            <GiButterflyFlower size={30} className="text-gray-500" />
          </div>
          <p className="leading-6">
            Every bouquets are hand-made and sourced directly from reliable
            farms. We ensure that our flowers will be vivid, long-lasting,
            stunning and be delivered to you graciously.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-2 items-end">
            <h4 className="font-medium text-lg">Exquisite Selection</h4>
            <GiFlowerPot size={30} className="text-gray-500" />
          </div>
          <p className="leading-6">
            From mediocre to extradinary, we delicately offer a wide variety of
            flowers for every taste and occasions, birthday, wedding,
            anniversary. you call it! Artistry is our specialty.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-2 items-end">
            <h4 className="font-medium text-lg">Custom Arrangements</h4>
            <TbHandClick size={30} className="text-gray-500" />
          </div>
          <p className="leading-6">
            Our talented florists are personalized-design specialist with
            visualized and unique style. Whether it's a grand event or a simple
            gesture of appreciation, we can tailor the perfect bouquet just for
            you.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-2 items-end">
            <h4 className="font-medium text-lg">Timely Delivery</h4>
            <TbTruckDelivery size={30} className="text-gray-500" />
          </div>
          <p className="leading-6">
            Punctuality is crucial. we are committed sincerely in delivering
            your flowers on time. We ensure that your blooms will arrive fresh
            and beautiful, just when you need them.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex gap-2 items-end">
            <h4 className="font-medium text-lg">Satisfaction Guaranteed</h4>
            <RiCustomerServiceLine size={30} className="text-gray-500" />
          </div>
          <p className="leading-6">
            Your satisfaction is our top priority. If unsatisfaction meets, We
            offer replacements or refunds to ensure that our customer meet
            expectations.
          </p>
        </div>
      </div>
      <div className="text-lg py-8 px-7 leading-9 bg-red-100 mt-10">
        <p>
          <span className="text-3xl font-bold text-red-400">
            We are more than just a flower shop,
          </span>{" "}
          we are your trusted partner for all life's moments, big and small.
          With our dedication to quality, creativity, and customer service, we
          strive to make every order a memorable one. Thank you for choosing our
          , where every bloom tells a story!
        </p>
      </div>
    </div>
  );
}

export default About;
