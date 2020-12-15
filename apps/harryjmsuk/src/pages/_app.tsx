import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";
import "../styles/styles.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    if (!window.GA_INITIALIZED && process.env.GOOGLE_ANALYTICS_ID) {
      initGA(process.env.GOOGLE_ANALYTICS_ID);
      window.GA_INITIALIZED = true;
    }
  }, []);

  useEffect(() => {
    logPageView();
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
