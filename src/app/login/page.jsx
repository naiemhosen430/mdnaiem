"use client";
import { useRouter } from "next/navigation";
import { gooogleSignUpHundler } from "@/api/firebase";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function Page() {
  // Use the useRouter hook to get the router object
  const router = useRouter();

  const signupWithGoogleHandler = async () => {
    try {
      await gooogleSignUpHundler();

      router.push("/");
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <>
      <div className="lg:p-20 py-20 p-2 mt-32 m-auto lg:w-6/12 w-12/12 text-center">
        <div
          onClick={signupWithGoogleHandler}
          className="flex items-center justify-center space-x-5 p-2 px-8 rounded-xl shadow-xl bg-slate-300 text-black font-bold text-2xl"
        >
          <h1>Login With Google</h1> <FaGoogle className="block" />
        </div>
      </div>
    </>
  );
}
