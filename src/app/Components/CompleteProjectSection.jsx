import React from "react";
import CompleteProject from "./CompleteProject";
import diahoo from "src/app/assets/diahoo.jpg";

export default function CompleteProjectSection() {
  return (
    <>
      <CompleteProject
        link={"https://diahoo.com/register"}
        image={diahoo}
        optionsp={[
          "Profile",
          "friend",
          "Blocking",
          "Posts",
          "Like",
          "Comments",
          "Chatting",
          "Notes",
          "Setting",
        ]}
        name={"Diahoo"}
        header={
          "Diahoo is a social media platform. This is a place where you can meet new friend and You can explore a new social experience. However i have develped it from my experience and it has made by React and Node js. As Dastabase i have used Mongodb"
        }
      />
    </>
  );
}
