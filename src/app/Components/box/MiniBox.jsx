"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MiniBox({ HeaderName, description }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className="LG:w-4/12 md:W-5/12 m-auto text-left inline-block cursor-pointer p-4"
        data-aos="fade-up"
      >
        <div className="hover:bg-slate-800 rounded-md shadow bg-slate-900 p-2">
          <h1
            className="text-2xl text-white p-4 font-bold"
            data-aos="fade-right"
          >
            {HeaderName}
          </h1>
          <p
            className="text-lm text-slate-500 px-4 pb-4 font-bold"
            data-aos="fade-left"
          >
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
