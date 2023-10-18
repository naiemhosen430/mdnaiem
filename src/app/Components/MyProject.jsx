"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectBox from "./box/ProjectBox";

export default function MyProject() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="p-10 mt-40 backdrop-blur-3xl m-auto lg:w-10/12 w-full">
        <h1 className="text-slate-400 LG:text-2xl p-4 py-5 mb-5 font-bold text-center">
          <span
            data-aos="fade-up"
            className="border hover:bg-slate-600 border-slate-600 py-2 px-4 border-b-8 border-r-4 rounded-md"
          >
            My amazing project for you
          </span>
        </h1>
        <div className="space-2 text-center">
          <ProjectBox
            projectname={"Diahoo"}
            image={""}
            description={
              "This is a social media platform. it has made by react and node js and i am currently working for it."
            }
          />
          <ProjectBox
            projectname={"Diahoo"}
            image={""}
            description={
              "This is a social media platform. it has made by react and node js and i am currently working for it."
            }
          />
          <ProjectBox
            projectname={"Diahoo"}
            image={""}
            description={
              "This is a social media platform. it has made by react and node js and i am currently working for it."
            }
          />
          <ProjectBox
            projectname={"Diahoo"}
            image={""}
            description={
              "This is a social media platform. it has made by react and node js and i am currently working for it."
            }
          />
          <ProjectBox
            projectname={"Diahoo"}
            image={""}
            description={
              "This is a social media platform. it has made by react and node js and i am currently working for it."
            }
          />
          <ProjectBox
            projectname={"Diahoo"}
            image={""}
            description={
              "This is a social media platform. it has made by react and node js and i am currently working for it."
            }
          />
        </div>
      </div>
    </>
  );
}
