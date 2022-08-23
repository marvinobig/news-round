import ArticlesMetaDataCard from "../ArticleMetaDataCard/ArticlesMetaDataCard";
import ArticleCommentsCard from "../ArticleCommentsCard/ArticleCommentsCard";
import styles from "./SingleArticleCard.module.css";
import React from "react";

const SingleArticleCard = ({ article }) => {
  return (
    <>
      <h2 className={styles.article_title}>{article.title}</h2>
      {article ? <ArticlesMetaDataCard article={article} /> : <p>No Data</p>}
      <div>
        <p>{article.body}</p>
      </div>
      <ArticleCommentsCard article_id={article.article_id} />
    </>
  );
};

export default SingleArticleCard;
