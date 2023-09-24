import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
// import Footer from "../Footer";
// import Resume from "../Resume";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      {/* <Resume /> */}
      <ContactMe />
    </>
  );
}
