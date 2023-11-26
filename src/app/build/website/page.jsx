"use client";
import { createOrder } from "@/api/firebaseAction/createOrder";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [cetagory, setCetagory] = useState(true);
  const [showName, setShowName] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [elert, setAlert] = useState(false);
  const [des, setdes] = useState(false);
  const [feature, setFeature] = useState(false);
  const [elertFirst, setAlertFirst] = useState(false);
  const [elertMessage, setAlertMessage] = useState("");
  const [featureOptions, setFeatureOptions] = useState([
    "user",
    "admin",
    "post",
    "post-like-comment",
    "order",
    "payment-getway",
    "chat",
    "video-audio-call",
    "contract-us/me",
    "cms",
  ]);
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    featutes: [],
    des: "",
    fullname: "",
    email: "",
    phone: "",
  });
  console.log({ formData });

  const shownamebox = () => {
    if (formData.category === "") {
      setCetagory(true);
      setShowName(false);
    } else {
      setCetagory(false);
      setShowName(true);
    }
  };
  const showfeaturebox = () => {
    if (formData.name === "") {
      setAlertMessage("Website name is required!!");
      setAlertFirst(true);
      setCetagory(false);
      setShowName(true);
    } else {
      setAlertFirst(false);
      setCetagory(false);
      setShowName(false);
      setdes(false);
      setFeature(true);
    }
  };
  const showdesbox = () => {
    if (formData.featutes.length === 0) {
      setCetagory(false);
      setFeature(true);
    } else {
      setCetagory(false);
      setShowName(false);
      setFeature(false);
      setdes(true);
    }
  };
  const showpersonalinfo = () => {
    if (formData.des === "") {
      setAlertMessage("Website description is required!!");
      setAlertFirst(true);
      setCetagory(false);
      setdes(true);
    } else {
      setCetagory(false);
      setdes(false);
      setAlertFirst(false);
      setShowName(false);
      setFeature(false);
      setPersonal(true);
    }
  };

  const submit = () => {
    if (
      formData.email === "" ||
      formData.phone === "" ||
      formData.fullname === ""
    ) {
      setAlertFirst(true);
      setAlertMessage("Fillup all field");
    } else {
      setAlertFirst(false);
      try {
        const data = createOrder(formData);
        if (data === "ok") {
          setAlert(true);
          setAlertMessage("Thank you for Order. I will get you soon.");
        } else {
          setAlertFirst(true);
          setAlertMessage("Something wents wrong!");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        // Handle error cases if needed
      }
      console.log(formData);
    }
  };

  // for choose feature
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });

    setFormData((prevFormData) => ({
      ...prevFormData,
      featutes: selectedOptions.includes(option)
        ? prevFormData.featutes.filter((item) => item !== option)
        : [...prevFormData.featutes, option],
    }));
  };

  return (
    <>
      {elert && (
        <div className="p-20 fixed h-screen w-screen top-0 left-0 bg-slate-950 text-center">
          <div>
            <h1 className="text-white text-xl font-bold">{elertMessage}</h1>
            <div className="text-center p-10 px-0">
              <Link
                href={"/"}
                className="text-lg text-white bg-slate-800 p-2 px-8 rounded-xl block"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="lg:p-10 p-5 pt-52 h-screen">
        {elertFirst && (
          <div className="text-xs bg-slate-900 text-white font-bold text-center p-5">
            {elertMessage}
          </div>
        )}
        {/* needfor */}
        {cetagory && (
          <div className="p-2">
            <div className="lg:flex lg:items-center lg:justify-center text-center">
              <h1 className="lg:text-3xl text-white font-bold">
                I need a website for my
              </h1>
              <select
                className="inline-block p-2 bg-black text-white border rounded-lg px-4 lg:m-4 m-10"
                name=""
                id=""
                onChange={(event) =>
                  setFormData({ ...formData, category: event.target.value })
                }
                defaultValue={""}
              >
                <option value={""} disabled>
                  Select
                </option>
                <option value="self">Self</option>
                <option value="company">Company</option>
                <option value="business">Business</option>
                <option value="agency">Agency</option>
                <option value="entertainment">Entertainment</option>
                <option value="news/portal">News/portal</option>
                <option value="e-commerce">E-commarce</option>
                <option value="app/website">App/website</option>
                <option value="social-media">Social-media</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="text-center p-10">
              <button
                onClick={shownamebox}
                className="p-4 px-6 text-2xl bg-slate-900 text-white font-bold rounded-xl shadow-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* choose name */}
        {showName && (
          <div className="p-2">
            <div className="lg:flex lg:items-center lg:justify-center text-center">
              <h1 className="lg:text-3xl text-white font-bold">
                My {formData.category}'s name is
              </h1>
              <input
                type="text"
                id="name"
                className="block p-2 bg-black text-white border rounded-lg px-4 lg:m-4 my-5"
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
            </div>
            <div className="text-center p-10">
              <button
                onClick={showfeaturebox}
                className="p-4 px-6 text-2xl bg-slate-900 text-white font-bold rounded-xl shadow-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* feature */}
        {feature && (
          <div className="p-2">
            <div className="lg:flex lg:items-center lg:justify-center text-center">
              <h1 className="lg:text-3xl text-white font-bold">
                My {formData.name}'s features will be
              </h1>
              {featureOptions.map((item) => (
                <>
                  <label
                    key={item}
                    className={` inline-block rounded-3xl p-1 text-xs px-3 ${
                      selectedOptions.includes(item)
                        ? "bg-slate-800"
                        : "bg-red-500 "
                    } text-slate-50`}
                  >
                    <input
                      className="text-sm text-white hidden font-bold p-1 px-2 rounded-xl bg-slate-800"
                      type="checkbox"
                      checked={selectedOptions.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                    {item}
                  </label>
                </>
              ))}
            </div>
            <div className="text-center p-10">
              <button
                onClick={showdesbox}
                className="p-4 px-6 text-2xl bg-slate-900 text-white font-bold rounded-xl shadow-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* description */}
        {des && (
          <div className="p-2">
            <div className="lg:flex lg:items-center lg:justify-center text-center">
              <h1 className="lg:text-3xl text-white font-bold">
                Write a short description about {formData.name}
              </h1>
            </div>
            <input
              type="text"
              className="inline-block p-2 bg-black text-white border rounded-lg px-4 lg:m-4 m-10"
              onChange={(event) =>
                setFormData({ ...formData, des: event.target.value })
              }
            />
            <div className="text-center p-10">
              <button
                onClick={showpersonalinfo}
                className="p-4 px-6 text-2xl bg-slate-900 text-white font-bold rounded-xl shadow-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* personal */}
        {personal && (
          <div className="p-2">
            <div className="p-2">
              <div className="lg:flex lg:items-center lg:justify-center text-center">
                <h1 className="lg:text-3xl text-white font-bold">
                  Write your full name
                </h1>
              </div>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="block p-2 bg-black text-white border rounded-lg px-4 lg:m-4 mx-5"
                onChange={(event) =>
                  setFormData({ ...formData, fullname: event.target.value })
                }
              />
            </div>
            <div className="p-2">
              <div className="lg:flex lg:items-center lg:justify-center text-center">
                <h1 className="lg:text-3xl text-white font-bold">
                  Write your email
                </h1>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="block p-2 bg-black text-white border rounded-lg px-4 lg:m-4 mx-5"
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
            </div>
            <div className="p-2">
              <div className="lg:flex lg:items-center lg:justify-center text-center">
                <h1 className="lg:text-3xl text-white font-bold">
                  Write your phone number
                </h1>
              </div>
              <input
                type="number"
                id="phone"
                name="phone"
                className="block p-2 bg-black text-white border rounded-lg px-4 lg:m-4 mx-5"
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                }
              />
            </div>
            <div className="text-center py-10">
              <button
                onClick={submit}
                className="p-4 px-6 lg:text-2xl bg-slate-900 text-white font-bold rounded-xl shadow-lg"
              >
                Submit order
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
