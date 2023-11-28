"use client";
import Link from "next/link";
import React from "react";

export default function page() {
  const commingSoon = () => {
    alert(" this feature is comming soon");
  };
  return (
    <>
      <div className="lg:p-20 py-20 p-5 pt-32 text-center">
        <div className="lg:w-3/12 w- bg-slate-900 rounded-xl shadow-xl p-5 inline-block m-5">
          <h1 className="text-2xl text-white p-2 font-bold">Biuld a website</h1>
          <p className="text-slate-500 text-lg p-2">
            Build a website. I will make you beautifull and fast performance web
            application. I will develop in MERN stack or stack Nextjs
          </p>
          <Link
            className="block p-2 px-4 w-full rounded-2xl bg-slate-700 text-white font-bold text-center text-xl"
            href={"/build/website"}
          >
            Get start
          </Link>
        </div>
        <div className="lg:w-3/12 w- bg-slate-900 rounded-xl shadow-xl p-5 inline-block m-5">
          <h1 className="text-2xl text-white p-2 font-bold">
            Customize website
          </h1>
          <p className="text-slate-500 text-lg p-2">
            Add costom features or costomize on your website. Make sure your
            website has developed by MERN stack or stack Nextjs.
          </p>
          <button
            onClick={commingSoon}
            className="block p-2 px-4 w-full rounded-2xl bg-slate-700 text-white font-bold text-center text-xl"
          >
            Get start
          </button>
        </div>
        <div className="lg:w-3/12 w- bg-slate-900 rounded-xl shadow-xl p-5 inline-block m-5">
          <h1 className="text-2xl text-white p-2 font-bold">
            Learn programming
          </h1>
          <p className="text-slate-500 text-lg p-2">
            If you are looking for learn programming then i have a offer for
            you. I will teach you from scratch and it's for absolute beginner.
          </p>
          <button
            onClick={commingSoon}
            className="block p-2 px-4 w-full rounded-2xl bg-slate-700 text-white font-bold text-center text-xl"
          >
            Get start
          </button>
        </div>
      </div>
    </>
  );
}
