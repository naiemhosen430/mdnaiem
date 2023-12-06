"use client";
import React from "react";
import { useUserAuth } from "../Context/UseAuthContext";

export default function page() {
  const { user } = useUserAuth();
  return (
    <>
      <div className="lg:p-10 p-5 pt-32">
        <h1 className="bg-slate-950 p-4 mb-10 text-2xl rounded-lg mx-5 text-slate-500">
          Hello <span className="text-white">{user.displayName}</span>
        </h1>
        <h1 className="bg-slate-950 p-4 text-2xl rounded-lg mx-5 text-slate-500">
          Order history
        </h1>
      </div>
    </>
  );
}
