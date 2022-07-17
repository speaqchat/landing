import type { NextPage } from "next";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>about | speaq</title>
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

        <div className="container mt-6 px-4 mx-auto flex flex-col flex-grow">
          <div className="mt-6 flex-grow flex flex-col justify-center">
            <h1 className="font-medium text-3xl tracking-tighter">
              About <span className="font-bold">speaq</span>
            </h1>
            <article className="mt-6 prose prose-zinc leading-normal">
              <b>speaq</b> is a chat app built with an open-source technology
              stack.
              <br />
              Our goal is to create a multiplatform chat app that can be used by
              everyone, regardless of age or expertise.
              <br />
              The app is currently available for <b>Windows</b>, <b>Linux</b>{" "}
              and <b>MacOS</b>, as well as on the web.
              <br />
              <b>We provide an alternative to other apps in the market.</b> Our
              product was built with the latest technologies and focuses on
              being performant as well as user-friendly.
            </article>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default About;
