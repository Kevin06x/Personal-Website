import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1E1E1E]">
      <Navbar/>
      <div className="container w-full max-w-screen-xl mx-auto mt-24 px-4 py-4 md:px-10 ">
        <HeroSection />
        <AboutSection />  
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}
