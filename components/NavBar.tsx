import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="flex w-full justify-between">
      {/* <Image /> */}
      <nav className="flex gap-4 items-center">
        <Link href="/">
          <svg
            viewBox="0 0 88 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              d="M83.9999 42.2778C84.0152 48.1439 82.6446 53.9306 79.9999 59.1667C76.864 65.4411 72.0432 70.7186 66.0774 74.4079C60.1117 78.0973 53.2366 80.0528 46.2222 80.0556C40.3561 80.0709 34.5694 78.7003 29.3333 76.0556L4 84.5L12.4444 59.1667C9.79968 53.9306 8.42914 48.1439 8.44444 42.2778C8.44715 35.2634 10.4027 28.3883 14.0921 22.4225C17.7814 16.4568 23.0589 11.636 29.3333 8.50012C34.5694 5.85537 40.3561 4.48483 46.2222 4.50013H48.4444C57.7081 5.0112 66.4579 8.92128 73.0183 15.4817C79.5787 22.0421 83.4888 30.7919 83.9999 40.0556V42.2778Z"
              stroke="#141414"
              strokeWidth="7.77777"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M64.9195 34.9436C64.1079 24.4541 54.2885 21.8521 45.6052 21.8521C37.6522 21.8521 26.8589 24.7793 26.8589 34.4557C26.8589 44.4573 37.3276 44.714 46.0109 45.2019C52.6654 45.4459 55.2623 47.7911 55.1 49.824C54.9377 52.1008 51.4481 53.727 46.0109 53.727C41.0606 53.727 36.4349 52.7513 36.1915 48.8482L26.1285 48.6856C26.7778 58.8498 35.7045 62.1837 45.7675 62.1837C55.0189 62.1837 64.7572 58.5245 65.8933 50.6371C66.6237 39.6598 56.155 38.4401 47.1471 37.7895C41.9533 37.4643 37.2464 36.9764 37.2464 34.3744C37.2464 31.4471 41.2229 30.2274 45.6863 30.2274C48.1209 30.2274 54.3696 30.7153 55.1812 35.2688L64.9195 34.9436Z"
              fill="#141414"
            />
          </svg>
        </Link>

        <div className="w-px h-full bg-primary-dark opacity-20"></div>
        <motion.div
          initial={{ translateX: -10 }}
          animate={{ translateX: 0 }}
          className="flex gap-4 items-center"
        >
          <Link href="/">
            <span className="cursor-pointer hover:text-brand-blue font-medium transition-colors underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-brand-blue">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer hover:text-brand-blue font-medium transition-colors underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-brand-blue">
              About
            </span>
          </Link>
          <Link href="/download">
            <span className="cursor-pointer hover:text-brand-blue font-medium transition-colors underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-brand-blue">
              Download
            </span>
          </Link>
        </motion.div>
      </nav>
      <a
        href="https://app.speaq.site/"
        className="font-medium px-6 py-1.5 bg-primary-dark text-white rounded-full shadow hover:bg-brand-blue transition-colors"
      >
        Login
      </a>
    </div>
  );
};
export default NavBar;
