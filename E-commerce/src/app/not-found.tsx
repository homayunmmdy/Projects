import Link from "next/link";
import styles from "@/styles/NotFound.module.css"


const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.noise}></div>
        <div className={styles.overlay}></div>
        <div className={styles.terminal}>
          <h1>
            Error <span className={styles.errorcode}>404</span>
          </h1>
          <p className={styles.output}>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <p className={styles.output}>
            <Link className="link" href="/">return to the homepage</Link>.
          </p>
          <p className={styles.output}>Good luck.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
