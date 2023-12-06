"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import MiniBox from "./MiniBox";

export default function MySkills() {
  return (
    <>
      <div className="backdrop-blur-3xl lg:w-10/12 m-auto my-20 lg:p-10">
        <h1 className="text-slate-400 LG:text-2xl lg:p-4 py-10 font-bold text-center">
          <span className="border border-slate-600 hover:bg-slate-500 py-2 px-4 border-b-8 border-r-4 rounded-md">
            I am Working with
          </span>
        </h1>
        <div className="text-center">
          <MiniBox
            HeaderName={"JavaScript"}
            description={"I am working with JavaScript for last 2 year."}
          />
          <MiniBox
            HeaderName={"Python"}
            description={"I am working with python for last 1 year."}
          />
          <MiniBox
            HeaderName={"DSA"}
            description={"I have knowledge Data stucture and algoritham."}
          />
          <MiniBox
            HeaderName={"HTML, CSS"}
            description={"I am working with HTML, CSS for last 2 year."}
          />
          <MiniBox
            HeaderName={"Tailwind css"}
            description={"I am working with Tailwind css for last 1 year."}
          />
          <MiniBox
            HeaderName={"React"}
            description={"I am working with React for last 1 year."}
          />
          <MiniBox
            HeaderName={"Next js"}
            description={"I am working with MongoDB for last 2 year."}
          />
          <MiniBox
            HeaderName={"Node js"}
            description={"I am working with Node js for last 2 year."}
          />
          <MiniBox
            HeaderName={"Firebase"}
            description={"I am working with Firebase for last 1 year."}
          />
          <MiniBox
            HeaderName={"MongoDB"}
            description={"I am working with MongoDB for last 2 year."}
          />
          <MiniBox
            HeaderName={"Flutter"}
            description={"I am working with MongoDB for last less then 1 year."}
          />
          <MiniBox
            HeaderName={"Git and github"}
            description={"As version control system I am using git and github."}
          />
        </div>
      </div>
    </>
  );
}
