import styles from "./DeleteArticle.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const DeleteArticle = () => {
  return (
    <>
      <button className={styles.delete_btn}>
        <FontAwesomeIcon icon={solid("trash")} />
      </button>
    </>
  );
};

export default DeleteArticle;
