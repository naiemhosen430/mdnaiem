"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MiniBox({ HeaderName, description }) {
  return (
    <>
      <div
        className="lg:w-4/12 md:w-5/12 w-full m-auto text-left inline-block cursor-pointer p-4"
        data-aos="fade-up"
      >
        <div className="hover:bg-slate-800 rounded-md shadow bg-slate-950 p-2">
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
