import styles from "./CommentPostForm.module.css";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import UserContext from "../../contexts/UserContext";
import { postComment } from "../../data/apiCalls";

const CommentPostForm = ({ article_id, setCommentData }) => {
  const { currUser } = useContext(UserContext);
  const [textAreaInput, setTextAreaInput] = useState("");

  function showForm() {
    const commentForm = document.querySelector(`#addCommentForm`);
    commentForm.showModal();
  }

  async function addComment() {
    const commentForm = document.querySelector(`#addCommentForm`);
    const commentObj = {
      username: currUser.username,
      body: textAreaInput,
    };

    const newComment = await postComment(article_id, commentObj);

    if (typeof newComment === "object") {
      setCommentData(commentObj);
    }

    commentForm.close();
  }

  function closeForm() {
    const commentForm = document.querySelector(`#addCommentForm`);
    commentForm.close();
  }

  return (
    <>
      <button className={styles.addComment_btn} onClick={showForm}>
        Post
      </button>
      <dialog id="addCommentForm" className={styles.addComment_form}>
        <form>
          <div className={styles.close_container}>
            <p>Post A Comment</p>
            <button
              type="button"
              className={styles.close_btn}
              onClick={closeForm}
            >
              <FontAwesomeIcon icon={solid("xmark")} />
            </button>
          </div>
          <div className={styles.username_container}>
            Username <p className={styles.username}>{currUser.username}</p>
          </div>

          <textarea
            id="commentBody"
            placeholder="Comment"
            value={textAreaInput}
            onChange={(e) => {
              setTextAreaInput(e.target.value);
            }}
          />

          <div className={styles.btn_container}>
            <button
              type="button"
              onClick={addComment}
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

export default CommentPostForm;
