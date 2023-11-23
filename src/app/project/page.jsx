import React from "react";
import ProjectBox from "../Components/ProjectBox";

export default function page() {
  return (
    <>
      <div className="p-10 pt-32">
        <h1 className="p-4 text-4xl text-slate-500">I have made for you!</h1>
        <div className="space-2 text-center">
          <ProjectBox
            projectname={"E-commerce"}
            image={"https://ecommerce-rho-blush.vercel.app/"}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"E-commerce two"}
            image={"https://ecommercenaiem.vercel.app/"}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"Agency"}
            image={"https://agencyone.vercel.app/"}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"Your jini"}
            image={"https://yourjini.vercel.app/"}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"Top-Ranking"}
            image={"https://top-ranking.vercel.app"}
            description={
              "This is a compition about question and answer website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"Agency two"}
            image={"https://agencytwo.vercel.app/"}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"Personal"}
            image={"https://personal-six-sable.vercel.app/"}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"MNBet"}
            image={"https://mnbet.vercel.app"}
            description={
              "This is a Onli Betting website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"App presention"}
            image={"https://app-presentation.vercel.app/"}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
        </div>
      </div>
    </>
  );
}
