"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Next.js", icon: "🖥️" },
  { name: "JavaScript", icon: "📜" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "GSAP", icon: "⚡" },
  { name: "Redux", icon: "🔄" },
  { name: "CI/CD Pipeline", icon: "🚀" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎭" },
  { name: "MUI", icon: "📦" },
  { name: "TypeScript", icon: "🔠" },
  { name: "GitHub", icon: "🐙" },
  { name: "Figma", icon: "🎨" },
];

const Clients = () => {
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation
      const cards = gsap.utils.toArray<HTMLElement>(".skill-card");

      // Staggered animation on load
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
          rotation: () => gsap.utils.random(-45, 45),
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "power3.out",
        }
      );

      // Tilt effect on hover
      cards.forEach((card) => {
        gsap.set(card, { transformStyle: "preserve-3d" });
        const tilt = gsap.timeline({ paused: true });
        tilt.to(card, {
          rotationX: 10,
          rotationY: 10,
          scale: 1.1,
          duration: 0.5,
          ease: "power1.out",
        });

        card.addEventListener("mouseenter", () => tilt.play());
        card.addEventListener("mouseleave", () => tilt.reverse());
      });

      // Border light animation
      if (skillRef.current) {
        const lightBorder = document.createElement("div");
        lightBorder.className = "light-border";
        skillRef.current.appendChild(lightBorder);

        gsap.to(lightBorder, {
          borderImageSource:
            "linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(255,0,255,1) 50%, rgba(0,255,255,1) 100%)",
          borderImageSlice: 1,
          duration: 4,
          repeat: -1,
          ease: "linear",
          rotation: 360,
        });
      }
    }, skillRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={skillRef}
      className="p-8 bg-gray-900 text-white  relative overflow-hidden h-screen"
    >
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card group relative p-6 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative flex flex-col items-center">
              <span className="text-4xl mb-4">{skill.icon}</span>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
