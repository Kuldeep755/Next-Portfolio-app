"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaEnvelope,
  FaProjectDiagram,
} from "react-icons/fa";

export const FloatingNav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-[100%] !bg-opacity-0 mt-1 relative md:w-[100%]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        {/* Logo */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          KJ
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-8">
          {[
            { name: "Home", path: "/", icon: <FaHome /> },
            { name: "About", path: "/about", icon: <FaUser /> },
            { name: "Skills", path: "/skills", icon: <FaClipboardList /> },
            {
              name: "Experience",
              path: "/experience",
              icon: <FaClipboardList />,
            },
            { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
            { name: "Project", path: "/project", icon: <FaProjectDiagram /> },
          ].map(({ name, path, icon }) => (
            <a
              key={name}
              onClick={() => router.push(path)}
              className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer transition-all"
            >
              {icon}
              <span>{name}</span>
            </a>
          ))}
        </div>

        {/* User Avatar & Mobile Menu Toggle */}
        <div className="flex items-center md:order-2 space-x-3 ">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <img
              className="w-8 h-8 rounded-full"
              src="/deep.jpeg"
              alt="user photo"
            />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu with Blurred Background */}
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-white/40 backdrop-blur-lg dark:bg-gray-800/40 dark:backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out transform z-10 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } md:hidden`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-900 dark:text-gray-300 hover:text-red-500 transition-all"
          >
            ✕
          </button>

          <ul className="flex flex-col mt-12 space-y-4 p-4">
            {[
              { name: "Home", path: "/", icon: <FaHome /> },
              { name: "About", path: "/about", icon: <FaUser /> },
              { name: "Skills", path: "/skills", icon: <FaClipboardList /> },
              {
                name: "Experience",
                path: "/experience",
                icon: <FaClipboardList />,
              },
              { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
              { name: "Project", path: "/project", icon: <FaProjectDiagram /> },
            ].map(({ name, path, icon }) => (
              <li key={name} onClick={() => router.push(path)}>
                <a className="flex items-center py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer transition-all">
                  {icon}
                  <span className="ml-2">{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
