"use client";
import { gooogleSignUpHundler } from "@/api/firebase";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function page() {
  const signupWithGoogleHandler = () => {
    try {
      gooogleSignUpHundler();
      navigate("/");
      setAlert(true);
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };
  return (
    <>
      <div className="p-20 mt-32 m-auto lg:w-6/12 text-center">
        <div
          onClick={signupWithGoogleHandler}
          className=" flex items-center justify-center space-x-5 p-2 px-8 rounded-xl shadow-xl bg-slate-300 text-black font-bold text-2xl"
        >
          <h1>Login With Google</h1> <FaGoogle className="block" />
        </div>
      </div>
    </>
  );
}
