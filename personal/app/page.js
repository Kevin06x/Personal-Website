import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1E1E1E]">
      <Navbar/>
      <div class="mx-auto container mt-24 px-3.5 py-4 md:px-10">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
