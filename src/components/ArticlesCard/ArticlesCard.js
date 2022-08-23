import styles from "./ArticlesCard.module.css";
import React from "react";
import moment from "moment";
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
              <p className={styles.user}>
                {article.author[0].toUpperCase() + article.author.slice(1)}
              </p>
              <p className={styles.topic}>
                {article.topic[0].toUpperCase() + article.topic.slice(1)}
              </p>
            </div>
            <h2 className={styles.article_title}>{article.title}</h2>
            <div className={styles.meta_info2}>
              <p className={styles.date}>
                Posted {moment(article.created_at).format("MMMM Do YYYY")}
              </p>

              <div className={styles.meta_info2_performance}>
                <p>
                  <FontAwesomeIcon icon={solid("comments")} />{" "}
                  {article.comment_count}
                </p>
                <p>
                  <FontAwesomeIcon icon={solid("thumbs-up")} /> {article.votes}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArticlesCard;
