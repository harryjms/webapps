import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Jarman Building Services Ltd.
      <br />
      Website by Harry Jarman.
    </footer>
  );
};

export default Footer;
