import styles from "./CommentPostForm.module.css";
import React from "react";

const CommentPostForm = () => {
  function showForm() {
    const commentForm = document.querySelector(styles.addComment_form);
    commentForm.showModal();
  }

  return (
    <>
      <button className={styles.addComment_btn} onClick={showForm}>
        Post
      </button>
      <dialog className={styles.addComment_form}>add comment</dialog>
    </>
  );
};

export default CommentPostForm;
