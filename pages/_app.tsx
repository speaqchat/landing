import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const API_URL = "https://speaq-api.herokuapp.com/";

  axios.defaults.baseURL = API_URL;

  return (
    <>
      <Head>
        <title>speaq</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/ico/favicon-16x16.png"
        />
        <meta property="og:url" content="https://speaq.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="speaq" />
        <meta property="og:description" content="Your new chat app" />
        <meta property="og:image" content="https://i.imgur.com/AqPZyXR.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="speaq.site" />
        <meta property="twitter:url" content="https://speaq.site/" />
        <meta name="twitter:title" content="speaq" />
        <meta name="twitter:description" content="Your new chat app" />
        <meta name="twitter:image" content="https://i.imgur.com/AqPZyXR.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <div className="overflow-x-hidden">
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
