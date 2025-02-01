"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { usePageTracking } from "@/lib/usePageTracking";

const Home = () => {
  // Track page visits
  usePageTracking();

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5  h-screen overflow-hidden w-screen">
      <FloatingNav />
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;
