"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectBox({ projectname, image, description }) {
  const [pInfo, setPInfo] = useState({
    projectname: "",
    image: "/",
    description: "",
  });

  useEffect(() => {
    setPInfo({
      projectname,
      image,
      description,
    });
  }, [image, description, projectname]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="lg:w-4/12 md:W-5/12 p-4 inline-block rounded-md">
        <div className="bg-slate-950 hover:bg-slate-900">
          <div className="bg-slate-950" data-aos="fade-up">
            <iframe src={pInfo.image} width="100%" height="400"></iframe>
          </div>
          <Link href={pInfo.image}>
            <div className="p-4">
              <h1
                className="text-2xl py-2 text-white font-bold"
                data-aos="fade-left"
              >
                {pInfo.projectname}
              </h1>
              <p className="text-slate-500" data-aos="fade-right">
                {pInfo.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
