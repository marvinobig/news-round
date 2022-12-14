import styles from "./ArticlesCard.module.css";
import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import LikeCard from "../LikeCard/LikeCard";

const ArticlesCard = ({ articles }) => {
  return (
    <>
      {articles ? (
        articles.map((article) => {
          return (
            <div key={article.article_id} className={styles.article_card}>
              <div className={styles.meta_info1}>
                <p className={styles.user}>{article.author}</p>
                <p className={styles.topic}>
                  {article.topic[0].toUpperCase() + article.topic.slice(1)}
                </p>
              </div>
              <Link to={`articles/${article.article_id}`}>
                <h2 className={styles.article_title}>{article.title}</h2>
              </Link>
              <div className={styles.meta_info2}>
                <p className={styles.date}>
                  {moment(article.created_at).format("MMMM Do YYYY")}
                </p>

                <div className={styles.meta_info2_performance}>
                  <p>
                    <FontAwesomeIcon icon={solid("comments")} />{" "}
                    {article.comment_count}
                  </p>
                  <LikeCard
                    votes={article.votes}
                    article_id={article.article_id}
                  />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Such Topic Exists</p>
      )}
    </>
  );
};

export default ArticlesCard;
