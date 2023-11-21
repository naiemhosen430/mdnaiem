"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

export default function ProjectBox({ projectname, image, description }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className="lg:w-4/12 md:W-5/12 p-4 inline-block rounded-md"
        data-aos="fade-left"
      >
        <div className="bg-slate-950 hover:bg-slate-900">
          <div className="bg-slate-950" data-aos="fade-up">
            <iframe
              src={image}
              width="100%"
              height="400"
              frameborder="1"
            ></iframe>
          </div>
          <Link href={image}>
            <div className="p-4">
              <h1
                className="text-2xl py-2 text-white font-bold"
                data-aos="fade-left"
              >
                {projectname}
              </h1>
              <p className="text-slate-500" data-aos="fade-right">
                {description}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
