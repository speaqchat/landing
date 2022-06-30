import type { NextPage } from "next";
import { useOS } from "../hooks/useOS";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Image from "next/image";
import LinuxLogo from "../assets/img/linux.svg";
import macOSLogo from "../assets/img/apple-alt.svg";
import WindowsLogo from "../assets/img/microsoft.svg";
import { useRef } from "react";
import Head from "next/head";

const Download: NextPage = () => {
  const OS = useOS();

  const versionsRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Head>
        <title>download | speaq</title>
      </Head>
      <motion.div
        initial={{ filter: "blur(5px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        className="h-screen pt-6 bg-primary-light flex flex-col"
      >
        <div className="container mx-auto px-4">
          <NavBar />
        </div>

        <div className="container px-4 mx-auto flex flex-grow items-center justify-between">
          <div className="max-w-md flex flex-col gap-4 relative">
            <h1 className="z-10 text-[48px] font-medium tracking-tighter w-3/4 leading-[0.9]">
              Download <span className="font-bold">speaq</span>
            </h1>
            <p className="z-10 leading-tight opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              magni distinctio voluptatem dignissimos, deserunt quisquam
              voluptatibus ab nisi nam veritatis!
            </p>

            <div className="absolute z-0 flex filter blur-2xl">
              <motion.div
                animate={{ translateX: 20, rotate: 45, scale: 1.2 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
                className="bg-brand-blue mt-20 rounded-full w-28 h-20"
              ></motion.div>
              <motion.div
                animate={{
                  translateY: 10,
                  rotate: 90,
                  translateX: -60,
                  scale: 1.4,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  repeatType: "reverse",
                }}
                className="bg-pink-500 ml-10 rounded-full w-20 h-32"
              ></motion.div>
              <motion.div
                animate={{ translateX: -20, rotate: 10, scale: 1.5 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  repeatType: "reverse",
                }}
                className="bg-emerald-500 mt-10 rounded-full w-20 h-16"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-2/6">
            <button
              // onClick={() => {
              //   router.push("/download");
              // }}
              className="py-3 rounded-full bg-primary-dark flex gap-2 items-center justify-center shadow font-medium hover:bg-brand-blue transition-colors"
            >
              {/* <Image
                src={
                  (OS === "Linux" && LinuxLogo) ||
                  (OS === "Win" && WindowsLogo) ||
                  (OS === "macOS" && macOSLogo) ||
                  ""
                }
                width={22}
                height={22}
              /> */}
              <p className="text-white h-5">Download for {OS}</p>
            </button>
            <p className="text-sm mt-4 font-medium flex gap-1 self-center">
              Not your OS?{" "}
              <div
                onClick={() => {
                  versionsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex gap-1 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="font-bold">Download other versions.</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </p>
          </div>
        </div>
      </motion.div>
      <div ref={versionsRef} className="h-screen bg-black text-white">
        <div className="container mx-auto flex flex-col h-full">
          <h1 className="font-medium tracking-tighter text-white text-3xl pt-8">
            Downloads
          </h1>
          <div className="flex w-full justify-between mt-6">
            <div className="w-1/4 bg-secondary-dark rounded-lg shadow p-6 flex flex-col">
              <h1 className="text-xl text-white font-bold">Windows</h1>
              <p className="text-white opacity-80 leading-tight mt-2">
                Download speaq for the Windows operating system.
              </p>
              <div className="bg-gradient-to-b mt-6 flex items-center justify-center from-brand-blue to-blue-900 w-full my-auto aspect-square rounded-2xl">
                <Image width={192} height={192} src={WindowsLogo} />
              </div>
              <button className="mt-6 text-white border rounded-full py-2 border-tertiary-dark hover:opacity-80 transition-opacity">
                Download
              </button>
            </div>
            <div className="w-1/4 bg-secondary-dark rounded-lg shadow p-6 flex flex-col">
              <h1 className="text-xl text-white font-bold">macOS</h1>
              <p className="text-white opacity-80 leading-tight mt-2">
                Download speaq for the macOS operating system.
              </p>
              <div className="bg-gradient-to-b mt-6 flex items-center justify-center from-purple-600 to-purple-800 w-full my-auto aspect-square rounded-2xl">
                <Image width={192} height={192} src={macOSLogo} />
              </div>
              <button className="mt-6 text-white border rounded-full py-2 border-tertiary-dark hover:opacity-80 transition-opacity">
                Download
              </button>
            </div>
            <div className="w-1/4 bg-secondary-dark rounded-lg shadow p-6 flex flex-col">
              <h1 className="text-xl text-white font-bold">Linux</h1>
              <p className="text-white opacity-80 leading-tight mt-2">
                Download speaq for the Linux operating system.
              </p>
              <div className="bg-gradient-to-b mt-6 flex items-center justify-center from-emerald-600 to-emerald-800 w-full my-auto aspect-square rounded-2xl">
                <Image width={192} height={192} src={LinuxLogo} />
              </div>
              <button className="mt-6 text-white border rounded-full py-2 border-tertiary-dark hover:opacity-80 transition-opacity">
                Download
              </button>
            </div>
            {/* <div className="w-1/4 bg-secondary-dark rounded-lg shadow p-6 flex flex-col">
              <h1 className="text-xl text-white font-bold">macOS</h1>
              <p className="text-white opacity-80 leading-tight mt-4">
                Download speaq for the macOS operating system.
              </p>
              <div className="bg-gradient-to-b flex items-center justify-center from-purple-600 to-purple-700 w-full my-auto aspect-square rounded-2xl ">
                <Image width={192} height={192} src={macOSLogo} />
              </div>
              <button className="mt-auto text-white border rounded-full py-2 border-tertiary-dark hover:opacity-80 transition-opacity">
                Download
              </button>
            </div>
            <div className="w-1/4 bg-secondary-dark rounded-lg shadow p-6 flex flex-col">
              <h1 className="text-xl text-white font-bold">Linux</h1>
              <p className="text-white opacity-80 leading-tight mt-4">
                Download speaq for the Linux operating system.
              </p>
              <div className="bg-gradient-to-b flex items-center justify-center from-emerald-600 to-emerald-700 w-full my-auto aspect-square rounded-2xl ">
                <Image width={192} height={192} src={LinuxLogo} />
              </div>
              <button className="mt-auto text-white border rounded-full py-2 border-tertiary-dark hover:opacity-80 transition-opacity">
                Download
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Download;
