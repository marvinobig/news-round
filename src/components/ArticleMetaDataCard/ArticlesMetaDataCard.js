import styles from "./ArticleMetaDataCard.module.css";
import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const ArticlesMetaDataCard = ({ article }) => {
  return (
    <div className={styles.meta_container}>
      <div className={styles.article_data}>
        <p className={styles.author}>{article.author}</p>
        <p className={styles.topic}>{article.topic}</p>
      </div>
      <div className={styles.article_performance}>
        <p className={styles.date}>
          {moment(article.created_at).format("MMMM Do YYYY, HH:MM a")}
        </p>
        <p>
          <FontAwesomeIcon icon={solid("comments")} /> {article.comment_count}
        </p>
        <p>
          <FontAwesomeIcon icon={solid("thumbs-up")} /> {article.votes}
        </p>
      </div>
    </div>
  );
};

export default ArticlesMetaDataCard;
