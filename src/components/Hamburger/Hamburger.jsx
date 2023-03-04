// styles
import styles from "./Hamburger.module.scss";

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
      <div className={isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </button>
  );
}

export default Hamburger;
