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
      <div className="p-4 sticky top-0 flex justify-center items-center z-10 bg-slate-900 shadow-md">
        <div className="text-2xl text-white lg:text-center font-bold w-10/12 lg:w-2/12">
          <h1>MD Naiem</h1>
        </div>
        <div className="lg:w-10/12 hidden lg:block text-center">
          <ul className="pt-2 space-x-8">
            <Link
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4"
            >
              MySelf
            </Link>
            <Link
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4"
            >
              My Project
            </Link>
            <Link
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4"
            >
              My Skills
            </Link>
            <Link
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4"
            >
              My Portfolio
            </Link>
            <Link
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4"
            >
              My Client Reviews
            </Link>
            <Link
              href={""}
              className="text-white rounded-full border bg-slate-500 border-red-400 py-1 px-4"
            >
              My CV
            </Link>
            <Link
              href={""}
              className="text-white rounded-full border bg-slate-800 border-red-400 py-1 px-10"
            >
              Contract With Me
            </Link>
          </ul>
        </div>
        <div onClick={toggleMenu} className="lg:hidden w-2/12 text-right">
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
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4 block hover:bg-slate-600"
            >
              MySelf
            </Link>
            <Link
              onClick={toggleMenu}
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4 block hover:bg-slate-600"
            >
              My Project
            </Link>
            <Link
              onClick={toggleMenu}
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4 block hover:bg-slate-600"
            >
              My Skills
            </Link>
            <Link
              onClick={toggleMenu}
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4 block hover:bg-slate-600"
            >
              My Portfolio
            </Link>
            <Link
              onClick={toggleMenu}
              href={""}
              className="text-slate-500 rounded-full border border-red-400 py-1 px-4 block hover:bg-slate-600"
            >
              My Client Reviews
            </Link>

            <div className="text-center py-10">
              <Link
                onClick={toggleMenu}
                href={""}
                className="text-white w-6/12 m-auto my-5 rounded-full border bg-slate-500 border-red-400 py-1 px-4 block hover:bg-slate-600"
              >
                My CV
              </Link>
              <Link
                onClick={toggleMenu}
                href={""}
                className="text-white w-6/12 m-auto my-5 rounded-full border bg-slate-800 border-red-400 py-1 px-10 block hover:bg-slate-600"
              >
                Contract With Me
              </Link>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
