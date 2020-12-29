import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="content">
        &copy; {new Date().getFullYear()} Jarman Building Services Ltd.
        <br />
        Website by Harry Jarman.
      </div>
    </footer>
  );
};

export default Footer;
