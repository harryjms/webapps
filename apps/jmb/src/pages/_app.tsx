import { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header/indx";
import "../styles/styles.scss";

const App = ({ Component, pageProps }: AppProps) => {
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
