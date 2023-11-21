"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  return (
    <>
      <div className="">
        <div className="flex p-10 py-20">
          <div
            className="w-4/12 lg:block hidden m-10 text-center"
            data-aos="fade-right"
          >
            <img
              src="data:image/jpeg;base64,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"
              alt="no image"
              className="inline-block w-80"
            />
          </div>

          <div className="lg:w-8/12 w-full lg:p-20 p-10" data-aos="fade-left">
            <h1
              className="lg:text-5xl text-4xl lg:pb-10 pb-5 font-bold text-white"
              data-aos="fade-up"
            >
              <span className="text-slate-700" data-aos="fade-right">
                Hello I'm{" "}
              </span>
              MD Naiem
            </h1>
            <p
              className="text-slate-400 font-bold text-xl lg:text-3xl py-2 lg:py-5"
              data-aos="fade-up"
            >
              I am a web developer and programmer
            </p>
            <div className="lg:flex lg:items-center py-10">
              <Link
                data-aos="fade-right"
                className="text-white m-4 text-center lg:py-4 py-2 block w-full lg:w-4/12 hover:bg-slate-800 px-8 lg:text-2xl border border-yellow-700 rounded-md"
                href={"/aboutme"}
              >
                About Me
              </Link>
              <Link
                data-aos="fade-left"
                className="text-white text-center m-4 lg:py-4 py-2 block w-full lg:w-4/12 hover:bg-slate-800 px-8 lg:text-2xl border border-yellow-700 rounded-md"
                href={"/contract"}
              >
                Contract
              </Link>
            </div>
          </div>
        </div>
        <p className="p-10 pt-0 text-white text-xl" data-aos="fade-up">
          If you want to acieeve something then start work ffrom now. If you
          Want to make your future bright then make money from now. Always be
          today not later and tomorrow.
        </p>
      </div>
    </>
  );
}
