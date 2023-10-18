"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CompleteProject({
  name,
  image,
  link,
  header,
  optionsp,
}) {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  useEffect(() => {
    setOptions(optionsp);
  }, [optionsp]);

  return (
    <>
      <div>
        <div className="p-10 lg:w-10/12 m-auto" data-aos="fade-up">
          <h1
            className="lg:text-4xl text-2xl text-slate-500 border-b-2 mb-5"
            data-aos="fade-left"
          >
            I have made <span className="text-white">{name}</span>
          </h1>
          <p className="lg:text-xl text-lg" data-aos="fade-right">
            {header}
          </p>
          <img
            data-aos="fade-bottom"
            className="w-full bg-slate-900 my-5 block h-80"
            src={image}
            alt="no image"
          />
          <div>
            <div className="w-full">
              {options.map((item) => (
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
            href={link}
          >
            Visit {name}
          </Link>
        </div>
      </div>
    </>
  );
}
