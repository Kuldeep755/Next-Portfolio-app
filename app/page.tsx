"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { usePageTracking } from "@/lib/usePageTracking";
import MainSkills from "@/components/Clients";
import { Spotlight } from "@/components/ui/Spotlight";

const Home = () => {
  // Track page visits
  usePageTracking();

  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto min-h-screen w-full sm:px-6 px-4 overflow-hidden ">
      <div className="flex flex-col w-full min-h-screen">
        <FloatingNav />
        <Hero />
        <MainSkills />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
