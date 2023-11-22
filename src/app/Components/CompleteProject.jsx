"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CompleteProject({ name, image, header, optionsp }) {
  const [pInfo, setPInfo] = useState({
    name: "",
    image: "",
    header: "",
    optionsp: [],
  });

  useEffect(() => {
    setPInfo({
      name,
      image,
      header,
      optionsp,
    });
  }, [name, image, header, optionsp]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <div>
        <div className="p-10 lg:w-10/12 m-auto" data-aos="fade-up">
          <h1
            className="lg:text-4xl text-2xl text-slate-500 border-b-2 mb-5"
            data-aos="fade-left"
          >
            I have made <span className="text-white">{pInfo.name}</span>
          </h1>
          <p className="lg:text-xl text-lg" data-aos="fade-right">
            {pInfo.header}
          </p>
          {/* <iframe src={pInfo.image} height="400" width="100%"></iframe> */}
          <div>
            <div className="w-full">
              {pInfo.optionsp.map((item) => (
                <div className="space-x-2 inline-block w-6/12" key={item}>
                  <div className="flex items-center text-slate-400 font-bold">
                    <span
                      className="text-2xl inline-block"
                      data-aos="fade-left"
                    ></span>
                    <span className="w-11/12 block" data-aos="fade-right">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link
            data-aos="fade-up"
            className="block p-2 bg-slate-900 hover:bg-slate-800 rounded-md text-yellow-600 text-center"
            href={pInfo.image}
          >
            Visit {pInfo.name}
          </Link>
        </div>
      </div>
    </>
  );
}
