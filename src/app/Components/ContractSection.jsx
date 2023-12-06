"use client";
import { sendMessageMe } from "@/api/firebaseAction/sendMessageMe";
import Link from "next/link";
import React, { useState } from "react";

export default function ContractSection() {
  const [elert, setAlert] = useState(false);
  const [elertFirst, setAlertFirst] = useState(false);
  const [elertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSendMessage = () => {
    if (
      formData.email === "" ||
      formData.fullName === "" ||
      formData.message === ""
    ) {
      setAlertFirst(true);
      setAlertMessage("Fillup all field");
    } else {
      try {
        const data = sendMessageMe(formData);
        if (data === "ok") {
          setAlert(true);
          setAlertMessage(
            "Thank you for contract with me. I will get you soon."
          );
        } else {
          setAlertFirst(true);
          setAlertMessage("Something wents wrong!");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        // Handle error cases if needed
      }
    }
  };
  const closeAlet = () => {
    setAlert(false);
  };
  return (
    <>
      <div className="lg:p-10 md:p-5 p-5 mt-20">
        <h1 className="p-4 text-4xl text-center text-slate-500">
          Send me a message!
        </h1>
        {elertFirst && (
          <div className="text-xs bg-slate-900 text-white font-bold text-center p-5">
            {elertMessage}
          </div>
        )}
        {elert && (
          <div className="p-40 fixed h-screen w-screen top-0 left-0 bg-slate-950 text-center">
            <div>
              <h1 className="text-white text-xl font-bold">{elertMessage}</h1>
              <div className="text-center p-10 px-0">
                <Link
                  onClick={closeAlet}
                  href={"/"}
                  className="text-lg text-white bg-slate-800 p-2 px-8 rounded-xl block"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="lg:p-10 md:p-5 p-1 lg:w-5/12 md:w-8/12 w-12/12 m-auto">
          <div className="py-2">
            <label
              className="block font-bold text-xl text-slate-400 p-1"
              htmlFor="fullName"
            >
              Enter your full name
            </label>
            <input
              className=" p-2 block w-full bg-slate-900 px-3 text-lg text-white"
              id="fullName"
              placeholder="Full name"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="py-2">
            <label
              className="block font-bold text-xl text-slate-400 p-1"
              htmlFor="email"
            >
              Enter your email
            </label>
            <input
              className=" p-2 block w-full bg-slate-900  px-3 text-lg text-white"
              id="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="py-2">
            <label
              className="block font-bold text-xl text-slate-400 p-1"
              htmlFor="message"
            >
              Enter your message
            </label>
            <textarea
              className=" block p-2 h-40 w-full bg-slate-900 px-3 text-lg text-white"
              name="message"
              placeholder="Message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="py-2 text-center">
            <button
              className="p-2 inline-block bg-slate-800 rounded-md hover:bg-slate-400 hover:text-black px-6 text-lg text-white"
              onClick={handleSendMessage}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
