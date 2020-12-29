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
        <div className={`content ${styles.content}`}>
          <div className={styles.brand}>
            <div className={styles.title}>
              <Link href="/">JBS Ltd.</Link>
            </div>
          </div>
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
        </div>
      </header>
    </>
  );
};

export default Header;
