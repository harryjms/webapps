import { useRouter } from "next/router";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import ActiveLink from "../ActiveLink";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
  }, [router.pathname]);

  const handleToggleMenu = () => {
    setShowMenu((state) => !state);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.menuIcon} onClick={handleToggleMenu}>
          <FontAwesomeIcon
            icon={faBars}
            aria-label="Menu"
            aria-hidden="false"
          />
        </div>
        <div className={styles.brand}>
          <div className={styles.title}>
            <Link href="/">Jarman Building Services</Link>
          </div>
        </div>
        <div className={styles.contact}>
          <small>Call Jim</small>
          <br />
          07931 344 504
        </div>
      </header>
      <nav className={`${styles.nav} ${showMenu && styles.show}`}>
        <ul>
          <li>
            <ActiveLink href="/" activeClassName={styles.active}>
              Home
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about" activeClassName={styles.active}>
              About
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contact" activeClassName={styles.active}>
              Contact
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
