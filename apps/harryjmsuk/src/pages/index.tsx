import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Harry Jarman</title>
      </Head>
      <div className="content intro">
        <h1>Hello, I'm Harry.</h1>
        <p>
          Software Engineer, specialising in front-end development, at the BBC.
        </p>
        <div className="links">
          <a href="https://github.com/harryjms" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/harryjarman/" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
      <div className={`about ${styles.section}`}>
        <div className="content">
          <h2>Projects</h2>
        </div>
        <section>
          <div className={styles.tuckshop}>
            <div className="content">
              <div className={styles.split}>
                <div className={styles.left}>
                  <h3>TuckShop</h3>
                  <small>
                    Design by{" "}
                    <a href="http://callum.marketing" target="_blank">
                      Callum
                    </a>
                  </small>
                  <p>
                    I developed and continue to maintain the website for
                    TuckShop, the home of UK Drag. The build also included the
                    integration of a customised Shopify store.
                  </p>
                  <br />
                  <a
                    href="https://tuckshopuk.com"
                    target="_blank"
                    className={`cta ${styles["cta-white"]}`}
                  >
                    Visit TuckShop
                  </a>
                </div>
                <div className={styles.right}>
                  <Image src="/images/tuckshop.png" width={500} height={481} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
