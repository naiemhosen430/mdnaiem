import React from "react";
import CompleteProject from "./box/CompleteProject";

export default function CompleteProjectSection() {
  return (
    <>
      <CompleteProject
        image={"https://diahoo.com/register"}
        link={"https://diahoo.com"}
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
      <CompleteProject
        image={"https://top-ranking.vercel.app/"}
        link={"https://top-ranking.vercel.app"}
        optionsp={[
          "Profile",
          "Add Question",
          "Answer Question",
          "Ranking",
          "Feed",
        ]}
        name={"Top-Ranking"}
        header={
          "Top_Ranking is a platform where you can test yourself by answering short question. it will help you to rank on the world. However i have developed it by next js and node js. As Database i have used mongoDb."
        }
      />
    </>
  );
}
