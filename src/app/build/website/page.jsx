"use client";
import React, { useState } from "react";

export default function Page() {
  const [cetagory, setCetagory] = useState(true);
  const [showName, setShowName] = useState(false);
  const [feature, setFeature] = useState(false);
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
    "",
  ]);
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    featutes: [],
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
      setCetagory(false);
      setShowName(true);
    } else {
      setCetagory(false);
      setShowName(false);
      setFeature(true);
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
      <div className="p-10 pt-52 h-screen">
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
                className="inline-block p-2 bg-black text-white border rounded-lg px-4 lg:m-4 m-10"
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
                onClick={showfeaturebox}
                className="p-4 px-6 text-2xl bg-slate-900 text-white font-bold rounded-xl shadow-lg"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
