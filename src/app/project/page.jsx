import React from "react";
import ProjectBox from "../Components/ProjectBox";
import apppresentation from "src/app/assets/appresentation.jpg";
import mnbet from "src/app/assets/mnbet.jpg";
import personal from "src/app/assets/personal.jpg";
import ecommerce from "src/app/assets/ecommerce.jpg";
import ecommercetwo from "src/app/assets/ecommercetwo.jpg";
import topranking from "src/app/assets/topranking.jpg";

export default function page() {
  return (
    <>
      <div className="lg:p-10 mt-20">
        <h1 className="p-4 text-4xl text-slate-500">I have made for you!</h1>
        <div className="p-10 backdrop-blur-3xl m-auto lg:w-10/12 w-full">
          <h1 className="text-slate-400 LG:text-2xl p-4 py-5 mb-5 font-bold text-center">
            <span
              data-aos="fade-up"
              className="border hover:bg-slate-600 border-slate-600 py-2 px-4 border-b-8 border-r-4 rounded-md"
            >
              My project for you
            </span>
          </h1>
          <div className="space-2 text-center">
            <ProjectBox
              projectname={"E-commerce"}
              link={"https://ecommerce-rho-blush.vercel.app/"}
              image={ecommerce}
              description={
                "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
              }
            />
            <ProjectBox
              projectname={"Top ranking"}
              link={"https://ecommerce-rho-blush.vercel.app/"}
              image={topranking}
              description={
                "This is a top ranking website made by next js tailwind css, node js and mongoDb."
              }
            />
            <ProjectBox
              projectname={"E-commerce two"}
              link={"https://ecommercenaiem.vercel.app/"}
              image={ecommercetwo}
              description={
                "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
              }
            />
            <ProjectBox
              projectname={"Agency"}
              link={"https://agencyone.vercel.app/"}
              image={""}
              description={
                "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
              }
            />
            <ProjectBox
              projectname={"MNBet"}
              link={"https://mnbet.vercel.app/"}
              image={mnbet}
              description={
                "This is a online betting website made by next js tailwind css, firebase."
              }
            />
            <ProjectBox
              projectname={"Personal"}
              link={"https://personal-six-sable.vercel.app/"}
              image={personal}
              description={
                "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
              }
            />
            <ProjectBox
              projectname={"App presention"}
              link={"https://app-presentation.vercel.app/"}
              image={apppresentation}
              description={
                "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
