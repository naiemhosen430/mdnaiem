import React from "react";

export default function page() {
  return (
    <>
      <div className="p-10">
        <h1 className="p-4 text-4xl text-center text-slate-500">
          Send me message!
        </h1>

        <div className="p-10 lg:w-5/12 md:w-8/12 w-12/12 m-auto">
          <div className="py-2">
            <label
              className="block font-bold text-xl text-slate-400 p-1"
              htmlFor="fullname"
            >
              Enter your full-name
            </label>
            <input
              className="lg:p-4 p-2 block w-full bg-slate-900 lg:px-6 px-3 text-lg text-white"
              id="fullname"
              placeholder="Full-name"
              type="text"
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
              className="lg:p-4 p-2 block w-full bg-slate-900 lg:px-6 px-3 text-lg text-white"
              id="email"
              placeholder="Email"
              type="email"
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
              className="lg:p-4 block p-2 h-40 w-full bg-slate-900 lg:px-6 px-3 text-lg text-white"
              name="message"
              placeholder="Message"
              id="message"
            ></textarea>
          </div>

          <div className="py-2 text-center">
            <button className="p-4 inline-block bg-slate-800 rounded-md hover:bg-slate-400 hover:text-black px-6 text-lg text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
