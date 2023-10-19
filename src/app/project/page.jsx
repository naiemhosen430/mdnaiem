import React from "react";
import ProjectBox from "../Components/box/ProjectBox";

export default function page() {
  return (
    <>
      <div className="p-10">
        <h1 className="p-4 text-4xl text-slate-500">I have made for you!</h1>
        <div className="space-2 text-center">
          <ProjectBox
            projectname={"E-commerce"}
            image={""}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"E-commerce two"}
            image={""}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"Agency"}
            image={""}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"Agency two"}
            image={""}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"Personal"}
            image={""}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
          <ProjectBox
            projectname={"App presention"}
            image={""}
            description={
              "This is a E-commerce website made by next js tailwind css, node js and mongoDb."
            }
          />
        </div>
      </div>
    </>
  );
}
