import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="p-10 bg-slate-950">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <FaFacebookSquare className="text-3xl m-3" />
          </Link>
          <Link href={"/"}>
            <FaInstagramSquare className="text-3xl m-3" />
          </Link>
          <Link href={"/"}>
            <FaLinkedin className="text-3xl m-3" />
          </Link>
          <Link href={"/"}>
            <FaSquareGithub className="text-3xl m-3" />
          </Link>
          <Link href={"/"}>
            <TiSocialYoutube className="text-3xl m-3" />
          </Link>
        </div>
        <div className="lg:flex lg:justify-center text-center">
          <div className="flex items-center">
            <BiSolidPhoneCall className="text-lg m-3 text-slate-500" />
            <h1 className="text-slate-500 font-bold text-lg">+8801920679575</h1>
          </div>
          <div className="flex items-center">
            <MdEmail className="text-lg m-3 text-slate-500" />
            <h1 className="text-slate-500 font-bold text-lg">
              naiemhosen430@gmail.com
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
