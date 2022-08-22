import styles from "./ArticlesCard.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const ArticlesCard = ({ articles }) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <div key={article.article_id} className={styles.article_card}>
            <div className={styles.meta_info1}>
              <p className={styles.user}>{article.author}</p>
              <p className={styles.topic}>{article.topic}</p>
            </div>
            <h2 className={styles.article_title}>{article.title}</h2>
            <div className={styles.meta_info2}>
              <p>Posted {article.created_at}</p>
              <p>
                <FontAwesomeIcon icon={solid("comments")} />{" "}
                {article.comment_count}
              </p>
              <p>
                <FontAwesomeIcon icon={solid("thumbs-up")} /> {article.votes}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArticlesCard;
