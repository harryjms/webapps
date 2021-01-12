import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/indx";
import * as gtag from "../utils/gtag";
import "../styles/styles.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Loft and Chalet conversions in the Bexley, Dartford, Bromley and Greenwich area."
        />
      </Head>
      <Header />
      <main className="content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
