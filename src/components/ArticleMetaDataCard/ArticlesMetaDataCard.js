import styles from "./ArticleMetaDataCard.module.css";
import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import LikeCard from "../LikeCard/LikeCard";

const ArticlesMetaDataCard = ({ article }) => {
  return (
    <div className={styles.meta_container}>
      <div className={styles.article_data}>
        <p className={styles.author}>{article.author}</p>
        <p className={styles.topic}>{article.topic}</p>
      </div>
      <p className={styles.date}>
        {moment(article.created_at).format("MMMM Do YYYY, HH:MM")}
      </p>
      <div className={styles.article_performance}>
        <p>
          <FontAwesomeIcon icon={solid("comments")} /> {article.comment_count}
        </p>
        {article.votes >= 0 ? (
          <LikeCard votes={article.votes} article_id={article.article_id} />
        ) : (
          <p>Not Logged In</p>
        )}
      </div>
    </div>
  );
};

export default ArticlesMetaDataCard;
