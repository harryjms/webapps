import Head from "next/head";

const Homepage = () => {
  return (
    <div className="content">
      <Head>
        <title>Harry Jarman</title>
      </Head>
      <h1>Hello, I'm Harry.</h1>
      <p>
        Software Engineer, specialising in front-end development, at the BBC.
      </p>
      <p>
        <i>More content coming soon</i> ✨
      </p>
      <a href="https://github.com/harryjms" target="_blank">
        Github
      </a>
      <a href="https://www.linkedin.com/in/harryjarman/" target="_blank">
        LinkedIn
      </a>
    </div>
  );
};

export default Homepage;
