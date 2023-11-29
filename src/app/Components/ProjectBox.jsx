"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectBox({ projectname, link, image, description }) {
  const [pInfo, setPInfo] = useState({
    projectname: "",
    link: "/",
    image,
    description: "",
  });

  useEffect(() => {
    setPInfo({
      projectname,
      link,
      description,
      image,
    });
  }, [link, description, image, projectname]);

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
            <Image
              className="w-full block"
              src={pInfo.image}
              width={0}
              height={0}
              alt="no image found"
            />
          </div>
          <Link href={pInfo.link}>
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
