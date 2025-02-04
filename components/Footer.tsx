import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full text-white py-2 px-4 mt-5">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-3 text-left">
          <h1 className="text-4xl font-extrabold">KJ</h1>
          <p className="text-base w-[90%]">
            Authentic and innovative. Built to the smallest detail with a focus
            on usability and performance.
          </p>
          <div className="flex justify-start gap-4 mt-2">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                onClick={() => window.open(info.link)}
                className="w-10 h-10 flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="font-semibold text-lg">Get in Touch</h3>
          <p className="mt-2 text-sm">+91 8875522755</p>
          <p className="text-sm">jatkuldeep945@gmail.com</p>
          <p className="text-sm">Bangalore, India</p>
          <button
            className="mt-4 px-4 py-2 border border-green-400 text-white hover:bg-green-400 hover:text-black transition"
            onClick={() => {
              window.location.href = `https://wa.me/918754262622?text=${encodeURIComponent(
                "Hello, I would like to connect with you!"
              )}`;
            }}
          >
            SEND A MESSAGE
          </button>
        </div>

        {/* Services */}
        <div className="text-left">
          <h3 className="font-semibold text-lg">Our Services</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li>Website Development</li>
            <li>Branding and Identity</li>
            <li>SEO & Digital Marketing</li>
            <li>Digital Images & Videos</li>
          </ul>
        </div>

        {/* Popular Tags */}
        <div className="text-left">
          <h3 className="font-semibold text-lg">Popular Tags</h3>
          <div className="flex flex-wrap justify-start mt-2 gap-2">
            {[
              "Health",
              "Development",
              "Technology",
              "App",
              "Education",
              "Business",
            ].map((tag) => (
              <span
                key={tag}
                className="border border-gray-500 px-3 py-1 text-sm hover:bg-gray-500 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-left text-sm mt-8">Copyright © 2024 Kuldeep Jat</p>
    </footer>
  );
};

export default Footer;
