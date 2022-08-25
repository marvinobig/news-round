import styles from "./ArticlePostForm.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ArticlePostForm = () => {
  const [articleData, setArticleData] = useState({});

  function showForm() {
    const articleForm = document.querySelector(`#addArticleForm`);
    articleForm.showModal();
  }

  function addArticle() {
    const articleForm = document.querySelector(`#addArticleForm`);
    articleForm.close();
  }

  function closeForm() {
    const articleForm = document.querySelector(`#addArticleForm`);
    articleForm.close();
  }

  return (
    <>
      <button className={styles.addArticle_btn} onClick={showForm}>
        Post
      </button>
      <dialog id="addArticleForm" className={styles.addArticle_form}>
        <form>
          <div className={styles.close_container}>
            <p>Post A Article</p>
            <button
              type="button"
              className={styles.close_btn}
              onClick={closeForm}
            >
              <FontAwesomeIcon icon={solid("xmark")} />
            </button>
          </div>
          <div className={styles.username_container}>
            Username <p className={styles.username}>User</p>
          </div>

          <textarea id="ArticleBody" placeholder="Article" />

          <div className={styles.btn_container}>
            <button
              type="button"
              onClick={addArticle}
              className={styles.post_btn}
            >
              Post
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ArticlePostForm;
