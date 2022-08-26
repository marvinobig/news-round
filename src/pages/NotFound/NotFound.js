import styles from "./NotFound.module.css";
import React from "react";

const NotFound = () => {
  return (
    <main>
      <p>
        <span className={styles.error}>404</span>
      </p>
      <p>The page you searched for does not exist.</p>
    </main>
  );
};

export default NotFound;
