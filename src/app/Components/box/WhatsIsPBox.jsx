"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function WhatsIsPBox({ image, header, description }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <>
        <div className="text-center bg-slate-800 p-10" data-aos="fade-bottom">
          <div className="lg:w-6/12">
            <h1
              className="text-3xl py-5 text-white font-bold"
              data-aos="fade-left"
            >
              {header}
            </h1>
            <p className="text-lg pb-5 text-slate-500" data-aos="fade-right">
              {description}
            </p>
            <button
              className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-md"
              data-aos="fade-left"
            >
              Learn More
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
