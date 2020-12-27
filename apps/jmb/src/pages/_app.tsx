import { AppProps } from "next/app";
import Header from "../components/Header/indx";
import "../styles/styles.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
