import Link from "next/link";
import { CustomButton } from "./components/CustomButton";
import memoji from "@/public/memoji.png";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div
        data-aos="fade"
        className="h-auto mb-[0.5rem] md:my-0 md:h-[60vh] flex items-center justify-center"
      >
        <div className="relative mx-[2rem] md:mx-[3rem] p-10 lg:mx-[12rem] w-full flex flex-col items-center justify-center">
          <div className="flex justify-center">
            <Image src={memoji} alt="memoji" className="w-52 md:w-[220px]" />
          </div>

          <h1 className="text-2xl font-bold md:text-4xl sm:text-xl xl:text-[2.5rem] text-left sm:text-center leading-tight md:leading-tight">
            Hi, I&apos;m{" "}
            <span className="relative inline-block bg-clip-text font-canela font-normal text-transparent bg-gradient-to-r from-[#c5d3f9] via-[#a886f7] to-[#f27af2]">
              Piyush,
            </span>
            &nbsp;just another{" "}
            <span className="text-2xl md:italic md:text-3xl xl:text-[2.5rem] mb-3 sm:mb-0 text-center sm:text-left font-extrabold dark:text-zinc-400">
              Software Engineer.
            </span>
          </h1>
        </div>
      </div>

      <div>
        <Link
          target="_blank"
          href={
            "https://drive.google.com/drive/folders/1JPdRWDD73kg4FSPawUJXqxAVDzYxaUsP?usp=sharing"
          }
        >
          <CustomButton />
        </Link>
      </div>

      <div className="flex justify-center items-center mt-12 gap-4 md:flex">
      <Link target="_balnk" href="https://github.com/piyushsonawane07" passHref>
        <FaGithub className="hover:text-gray-500 cursor-pointer" size={28} />
      </Link>
      <Link target="_balnk" href="https://www.linkedin.com/in/piyush-sonawane-1302" passHref>
        <FaLinkedin className="hover:text-gray-500 cursor-pointer" size={28} />
      </Link>
      <Link target="_balnk" href="https://www.instagram.com/piyush_s0nawane" passHref>
        <FaInstagram className="hover:text-gray-500 cursor-pointer" size={28} />
      </Link>
      <Link target="_balnk" href="https://twitter.com/piyush_s0nawane" passHref>
        <FaTwitter className="hover:text-gray-500 cursor-pointer" size={28} />
      </Link>
    </div>

      <div className="hidden lg:flex justify-between items-center flex-col mt-8 md:flex">
        <div className="mouse-icon md:block hidden">
          <span className="mouse-wheel"></span>
        </div>
      </div>
    </>
  );
};

export default Hero;
