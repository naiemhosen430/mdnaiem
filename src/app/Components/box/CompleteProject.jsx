"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";

export default function CompleteProject({
  name,
  image,
  link,
  header,
  optionsp,
}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(optionsp);
  }, [optionsp]);

  console.log(options);

  return (
    <>
      <div>
        <div className="p-10 lg:w-10/12 m-auto">
          <h1 className="text-4xl text-slate-500 border-b-2 mb-5">
            I have made <span className="text-white">{name}</span>
          </h1>
          <p className="text-xl">{header}</p>
          <img
            className="w-full bg-slate-900 my-5 block h-80"
            src={image}
            alt="no image"
          />
          <div>
            <div className="w-full">
              {options.map((item) => (
                <div className="space-x-2 inline-block w-6/12">
                  <div
                    key={item}
                    className="flex items-center text-slate-400 font-bold"
                  >
                    <span className="text-2xl inline-block">
                      <MdOutlineDownloadDone />
                    </span>
                    <span className="w-11/12 block">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link
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
