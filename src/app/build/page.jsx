import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="p-20 pt-32">
        <div className="lg:w-3/12 bg-slate-900 rounded-xl shadow-xl p-5 inline-block">
          <h1 className="text-2xl text-white p-2 font-bold">Biuld a website</h1>
          <p className="text-slate-500 text-lg p-2">
            Build a website by me. I am here to make you beautifull and fast
            performance web application.
          </p>
          <Link
            className="block p-2 px-4 w-full rounded-2xl bg-slate-700 text-white font-bold text-center text-xl"
            href={"/build/website"}
          >
            Get start
          </Link>
        </div>
      </div>
    </>
  );
}
