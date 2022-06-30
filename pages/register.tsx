import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";
import z, { ZodIssue } from "zod";
import LoaderIcon from "../assets/icon/loader.svg";
import NavBar from "../components/NavBar";

const Register: NextPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ZodIssue[] | null>(null);

  const router = useRouter();

  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const signUpSchema = z.object({
    username: z
      .string()
      .min(3, "Username must have at least 3 characters.")
      .max(20, "Username must have less than 20 characters.")
      .regex(usernameRegex, "Username must not contain spaces"),
    email: z.string().email("Invalid email."),
    password: z
      .string()
      .min(6, "Password must have at least 6 characters.")
      .regex(passwordRegex),
  });

  const signupMutation = useMutation(
    async () => {
      const parse = signUpSchema.safeParse({ username, email, password });

      if (!parse.success) {
        setErrors(parse.error.issues);
        throw new Error();
      }

      const res = await axios.post("/signup", {
        username,
        email,
        password,
      });

      return res.data;
    },
    {
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: () => {
        router.push("https://app.speaq.site/");
      },
      onError: (e: any) => {
        setLoading(false);
      },
    }
  );

  return (
    <>
      <Head>
        <title>signup | speaq</title>
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
            <h1 className="z-10 text-[48px] font-bold tracking-tighter w-3/4 leading-[0.9]">
              Sign up for an account.
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
          <form
            className="flex flex-col w-2/5"
            onSubmit={(e) => {
              e.preventDefault();

              signupMutation.mutate();
            }}
          >
            <label className="mb-2 font-medium" htmlFor="username">
              Username
            </label>
            <input
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              className="focus:outline-none border-2 border-transparent focus-visible:border-brand-blue transition-colors px-3 mb-4 h-10 rounded-lg bg-secondary-light"
            />
            <label className="mb-2 font-medium" htmlFor="email">
              Email address
            </label>
            <input
              placeholder="name@email.com"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              className="focus:outline-none border-2 border-transparent focus-visible:border-brand-blue transition-colors px-3 mb-4 h-10 rounded-lg bg-secondary-light"
            />
            <label className="mb-2 font-medium" htmlFor="password">
              Password
            </label>
            <input
              placeholder="your password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="focus:outline-none border-2 border-transparent focus-visible:border-brand-blue transition-colors px-3 mb-8 h-10 rounded-lg bg-secondary-light"
            />
            <button
              className="focus:outline-none focus-visible:border-2 border-brand-blue flex items-center justify-center mb-4 h-10 hover:opacity-80 transition-opacity bg-primary-dark rounded-lg font-medium"
              type="submit"
            >
              <AnimatePresence>
                {loading ? (
                  <Image
                    width={16}
                    height={16}
                    src={LoaderIcon}
                    className="animate-spin-cool"
                  />
                ) : (
                  <motion.span
                    initial={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="text-white"
                  >
                    Sign up
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <p>
              {errors
                ? errors.map((err) => {
                    return (
                      <>
                        <span key={err.code} className="text-red-500">
                          {err.message}
                        </span>
                        <br />
                      </>
                    );
                  })
                : null}
            </p>
          </form>
        </div>
      </motion.div>
    </>
  );
};
export default Register;
