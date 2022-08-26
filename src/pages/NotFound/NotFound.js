import styles from "./NotFound.module.css";
import React from "react";

const NotFound = () => {
  return (
    <main>
      <div>
        <p>
          Oops, You've Just Recieved a <span className={styles.error}>404</span>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
