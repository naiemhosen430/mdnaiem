import Image from "next/image";
import Hero from "./Components/Hero";
import MySkills from "./Components/MySkills";
import MyThinking from "./Components/MyThinking";
import MyProject from "./Components/MyProject";
import CompleteProjectSection from "./Components/CompleteProjectSection";
import WhatisP from "./Components/WhatisP";

export default function Home() {
  return (
    <>
      <>
        <Hero />
        <MySkills />
        <MyThinking />
        <MyProject />
        <CompleteProjectSection />
        <WhatisP />
      </>
    </>
  );
}
