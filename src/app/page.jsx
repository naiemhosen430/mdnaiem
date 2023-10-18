import Image from "next/image";
import Hero from "./Components/Hero";
import MySkills from "./Components/MySkills";
import MyThinking from "./Components/MyThinking";
import MyProject from "./Components/MyProject";
import CompleteProjectSection from "./Components/CompleteProjectSection";

export default function Home() {
  return (
    <>
      <>
        <Hero />
        <MySkills />
        <MyThinking />
        <MyProject />
        <CompleteProjectSection />
      </>
    </>
  );
}
