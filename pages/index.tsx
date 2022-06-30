import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LinuxLogo from "../assets/img/linux.svg";
import macOSLogo from "../assets/img/apple-alt.svg";
import WindowsLogo from "../assets/img/microsoft.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useOS } from "../hooks/useOS";

const Home: NextPage = () => {
  const OS = useOS();

  const router = useRouter();

  return (
    <>
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
            <h1 className="z-10 text-[48px] font-bold tracking-tighter w-3/4 leading-[0.9]">
              Your new chat client.
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
          <div className="flex flex-col gap-6 w-2/6">
            {!OS ? (
              <button
                onClick={() => {
                  router.push("/download");
                }}
                className="py-2.5 rounded-full bg-primary-dark text-white shadow font-medium hover:bg-brand-blue transition-colors"
              >
                Download
              </button>
            ) : (
              <button
                onClick={() => {
                  router.push("/download");
                }}
                className="py-3 rounded-full bg-primary-dark flex gap-2 items-center justify-center shadow font-medium hover:bg-brand-blue transition-colors"
              >
                <Image
                  src={
                    (OS === "Linux" && LinuxLogo) ||
                    (OS === "Win" && WindowsLogo) ||
                    (OS === "macOS" && macOSLogo)
                  }
                  width={22}
                  height={22}
                />
                <p className="text-white h-5">Download for {OS}</p>
              </button>
            )}
            <button
              onClick={() => {
                router.push("/register");
              }}
              className="py-3 rounded-full bg-white text-primary-dark shadow font-medium hover:shadow-md transition-shadow"
            >
              <p className="h-5">Sign up</p>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
