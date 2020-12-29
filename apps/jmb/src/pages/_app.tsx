import { AppProps } from "next/app";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { initGA } from "../components/GA";
import Header from "../components/Header/indx";
import "../styles/styles.scss";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED && process.env.GOOGLE_ANALYTICS_ID) {
      initGA(process.env.GOOGLE_ANALYTICS_ID);
      window.GA_INITIALIZED = true;
    }
  }, []);
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
