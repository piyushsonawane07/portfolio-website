"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/Ps.png";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience-section");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${styles.navbar} ${
        isSticky
          ? "sticky top-0 bg-black/60 backdrop-blur-lg shadow-lg z-50 transition-all duration-300"
          : "relative"
      } flex justify-between items-center py-3 md:py-4 px-[1.5rem] sm:px-[3rem] lg:px-[10rem]`}
    >
      {/* Logo */}
      <Link href={"/"} className="font-extrabold text-2xl ml-1">
        <Image src={logo} alt="logo" width={30} height={30} />
      </Link>

      {/* Menu for larger screens */}
      <div className="hidden md:flex space-x-8 py-2 items-center cursor-pointer">
        <div
          onClick={scrollToProjects}
          className="text-gray-300 hover:text-blue-500 text-sm font-normal"
        >
          Projects
        </div>

        <div
          onClick={scrollToExperience}
          className="text-gray-300 hover:text-blue-500 text-sm font-normal"
        >
          Experience
        </div>
      </div>

      {/* Menu button for small screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-blue-500 focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-black/60 backdrop-blur-lg rounded-lg shadow-lg p-4 flex flex-col space-y-4 md:hidden">
          <div
            className="text-gray-300 hover:text-blue-500 text-md font-normal"
            onClick={() => {setIsMenuOpen(false); scrollToProjects} }
          >
            Projects
          </div>

          <div
            className="text-gray-300 hover:text-blue-500 text-md font-normal"
            onClick={() => {setIsMenuOpen(false); scrollToExperience}}
          >
            Experience
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
