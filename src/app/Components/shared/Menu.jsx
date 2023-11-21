"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [mMenu, setMMenu] = useState(false);

  const toggleMenu = () => {
    if (mMenu === true) {
      setMMenu(false);
    } else {
      setMMenu(true);
    }
  };
  return (
    <>
      <div className="sticky p-5 top-1 flex justify-center items-center w-screen bg-slate-900 shadow-md">
        <div className="text-2xl text-white lg:text-center font-bold w-9/12 lg:w-2/12">
          <Link href={"/"}>
            <h1>MD Naiem</h1>
          </Link>
        </div>
        <div className="lg:w-10/12 hidden lg:block text-center">
          <ul className="pt-2 space-x-8">
            <Link
              href={"/aboutme"}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4"
            >
              About Me
            </Link>
            <Link
              href={"/project"}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4"
            >
              Project
            </Link>
            <Link
              href={"/clientreview"}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4"
            >
              My Client Reviews
            </Link>
            <Link
              href={"https://github.com/naiemhosen430"}
              className="text-white rounded-full border bg-slate-500 border-red-400 py-1 px-4"
            >
              Github
            </Link>
            <Link
              href={"/contract"}
              className="text-white rounded-full border bg-slate-800 border-red-400 py-1 px-10"
            >
              Contract
            </Link>
          </ul>
        </div>
        <div onClick={toggleMenu} className="lg:hidden w-2/12 text-center">
          <button className="block py-2 px-4 rounded-md hover:bg-slate-700 bg-slate-800">
            Menu
          </button>
        </div>
      </div>

      {mMenu && (
        <div className="h-screen p-4">
          <ul className="pt-2 space-y-4">
            <Link
              onClick={toggleMenu}
              href={"/aboutme"}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4 block hover:bg-slate-600"
            >
              About Me
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/project"}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4 block hover:bg-slate-600"
            >
              Project
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/clientreview"}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4 block hover:bg-slate-600"
            >
              My Client Reviews
            </Link>

            <div className="text-center py-10">
              <Link
                onClick={toggleMenu}
                href={"https://github.com/naiemhosen430"}
                className="text-white w-6/12 m-auto my-5 rounded-full border bg-slate-500 border-red-400 py-1 px-4 block hover:bg-slate-600"
              >
                Github
              </Link>
              <Link
                onClick={toggleMenu}
                href={"/contract"}
                className="text-white w-6/12 m-auto my-5 rounded-full border bg-slate-800 border-red-400 py-1 px-10 block hover:bg-slate-600"
              >
                Contract
              </Link>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
