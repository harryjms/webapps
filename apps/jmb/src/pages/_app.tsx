import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { initGA, logPageView } from "../components/GA";
import Header from "../components/Header/indx";
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
      <Header />
      <main className="content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
