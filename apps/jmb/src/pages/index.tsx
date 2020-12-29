import Head from "next/head";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "../styles/Homepage.module.scss";

import chalet1 from "../../public/assets/images/chalet1.jpg";
import chalet2 from "../../public/assets/images/chalet2.jpg";
import chalet3 from "../../public/assets/images/chalet3.jpg";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>{process.env.SITE_TITLE} - Loft and Chalet Conversions</title>
      </Head>
      <div>
        <h1>Welcome</h1>
        <div className={styles.slideshow}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            playDirection="forward"
            isPlaying
            dragEnabled={false}
            touchEnabled={false}
            isIntrinsicHeight
            interval={5000}
          >
            <Slider>
              <Slide index={0}>
                <img src={chalet1} />
              </Slide>
              <Slide index={1}>
                <img src={chalet2} />
              </Slide>
              <Slide index={3}>
                <img src={chalet3} />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
        <p>
          Based in Bexleyheath, Jarman Building Services does exactly what the
          name suggests! We specialise in the chalet style of house found
          throughout Bexley, Dartford, Bromley and Greenwich.
        </p>
        <p>
          <b>Our services include:</b>
        </p>
        <ul>
          <li>
            First level full or part roof conversions, giving you additional
            bedrooms and bathrooms.
          </li>
          <li>
            Ground floor kitchen / dining room extensions, resulting in that big
            kitchen you’ve always wanted.
          </li>
          <li>Internal wall removal.</li>
          <li>Chimney breast removal.</li>
          <li>Installation of structural steels.</li>
          <li>Kitchen fitting, including all appliances.</li>
          <li>Bathroom fitting, including tiling.</li>
          <li>Installation of under floor heating.</li>
          <li>Electrical work. Certified by NICEIC</li>
          <li>Plumbing and Gas. Certified by GasSafe</li>
          <li>Carpentry.</li>
          <li>Plastering.</li>
          <li>Decorating.</li>
        </ul>
        <p>Call Jim today on 07931 344 504.</p>
      </div>
    </>
  );
};

export default Homepage;
