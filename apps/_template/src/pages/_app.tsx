import { GetStaticProps } from "next";
import { AppProps } from "next/app";
import Link from "next/link";
import "../styles/styles.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      {process.env.GOOGLE_ANALYTICS_ID}
      <Component {...pageProps} />
    </div>
  );
};

export default App;
