import Link from "next/link";
import { CustomButton } from "./components/CustomButton";
import memoji from "@/public/memoji.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        data-aos="fade"
        className="h-auto mb-[1rem] md:my-0 md:h-[60vh] flex items-center justify-center"
      >
        <div className="relative mx-[5rem] md:mx-[3rem] p-10 lg:mx-[12rem] w-full flex flex-col items-center justify-center">
          <div className="flex justify-center">
            <Image src={memoji} alt="memoji" />
          </div>

          <h1 className="text-3xl font-bold md:text-4xl xl:text-[3rem] text-left sm:text-center leading-tight md:leading-tight">
            Hi, I&apos;m{" "}
            <span className="relative inline-block bg-clip-text font-canela font-normal text-transparent bg-gradient-to-r from-[#c5d3f9] via-[#a886f7] to-[#f27af2]">
              Piyush,
            </span>
            &nbsp;just another{" "}
            <span className="text-3xl italic md:text-3xl xl:text-[3rem] mb-3 sm:mb-0 text-center sm:text-left font-extrabold dark:text-zinc-400">
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

      <div className="flex justify-between items-center flex-col mt-16">
        <div className="mouse-icon">
          <span className="mouse-wheel"></span>
        </div>
      </div>
    </>
  );
};

export default Hero;
