import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as gtag from "../../utils/gtag";
import styles from "./Footer.module.scss";
const Footer = () => {
  const handleSocialLink = (site: "facebook" | "instagram") => {
    gtag.event({
      action: "external_link",
      category: "social_profile",
      label: site,
      value: 1,
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={`content ${styles.wrapper}`}>
        <div className={styles.left}>
          &copy; {new Date().getFullYear()} Jarman Building Services Ltd.
          <br />
          Website by Harry Jarman.
        </div>
        <div className={styles.right}>
          <a
            href="https://www.facebook.com/Jarman-Building-Services-106944797972553"
            onClick={() => handleSocialLink("facebook")}
            target="_blank"
            title="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className={`${styles.icon} ${styles.facebook}`}
            />
          </a>
          <a
            href="https://www.instagram.com/jbs_bexleyheath/"
            onClick={() => handleSocialLink("instagram")}
            target="_blank"
            title="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className={`${styles.icon} ${styles.instagram}`}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
