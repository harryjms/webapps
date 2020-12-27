import Link from "next/link";
import { useRouter } from "next/router";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

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
          <div className={styles.title}>Jarman Building Services</div>
        </div>
        <div className={styles.contact}>07931 344 504</div>
      </header>
      <nav className={`${styles.nav} ${showMenu && styles.show}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
