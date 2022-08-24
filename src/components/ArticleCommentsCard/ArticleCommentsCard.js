import React, { useEffect, useState } from "react";
import { fetchArticleComments } from "../../data/apiCalls";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import styles from "./ArticleCommentsCard.module.css";
import CommentPostForm from "../CommentPostForm/CommentPostForm";

const ArticleCommentsCard = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    async function fetchArticleCommentsData() {
      if (article_id) {
        const fetchedArticleComments = await fetchArticleComments(article_id);

        setArticleComments(fetchedArticleComments);
      }
    }

    fetchArticleCommentsData();
  }, [article_id]);

  return (
    <div className={styles.comments_container}>
      <div className={styles.title_container}>
        <h3 className={styles.comment_title}>
          Comments <FontAwesomeIcon icon={solid("comments")} />
        </h3>
        <CommentPostForm />
      </div>
      {articleComments ? (
        articleComments.map((comment) => {
          return (
            <div key={comment.comment_id} className={styles.comment_card}>
              <div className={styles.commentTitle_container}>
                <p className={styles.user}>
                  {comment.author[0].toUpperCase() + comment.author.slice(1)}
                </p>
                <button className={styles.delete_btn}>
                  <FontAwesomeIcon icon={solid("trash")} />
                </button>
              </div>

              <p>{comment.body}</p>
              <p className={styles.date}>
                {moment(comment.created_at).format("MMMM Do YYYY, HH:MM")}
              </p>
            </div>
          );
        })
      ) : (
        <p>No Comments Available On This Article. Be The First To Post One.</p>
      )}
    </div>
  );
};

export default ArticleCommentsCard;
