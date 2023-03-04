// react
import { useState } from "react";

// styles
import styles from "./Navbar.module.scss";

// components
import { Hamburger } from "../../components";

function Navbar() {
  // state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>ReactSass</div>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={isOpen ? `${styles.list_bg} ${styles.open}` : styles.list_bg}>
        <ul className={isOpen ? `${styles.list} ${styles.open}` : styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>About</li>
          <li className={styles.item}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
