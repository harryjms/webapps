import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - {process.env.SITE_TITLE}</title>
      </Head>
      <h1>Contact</h1>
      Call Jim on 07931 344 504
    </>
  );
};

export default Contact;
