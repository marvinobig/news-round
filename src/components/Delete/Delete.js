import styles from "./Delete.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { deleteArticleOrCommentById } from "../../data/apiCalls";
import { useNavigate } from "react-router-dom";

const Delete = ({ infoToDelete, id, setArticleComments }) => {
  const navigate = useNavigate();

  async function deleteData() {
    await deleteArticleOrCommentById(infoToDelete, id);

    if (infoToDelete === "article") {
      navigate("/");
    }

    if (infoToDelete === "comment") {
      setArticleComments((currComments) => {
        return currComments.filter((comment) => comment.comment_id !== id);
      });
    }
  }

  return (
    <>
      <button className={styles.delete_btn} onClick={deleteData}>
        <FontAwesomeIcon icon={solid("trash")} />
      </button>
    </>
  );
};

export default Delete;
