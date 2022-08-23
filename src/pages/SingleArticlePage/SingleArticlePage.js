import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCommentsCard from "../../components/ArticleCommentsCard/ArticleCommentsCard";
import ArticlesMetaDataCard from "../../components/ArticleMetaDataCard/ArticlesMetaDataCard";
import { fetchArticleById } from "../../data/apiCalls";
import styles from "./SingleArticlePage.module.css";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function articleData() {
      const fetchedArticle = await fetchArticleById(article_id);

      setArticle(fetchedArticle);
    }

    articleData();
  }, [article_id]);

  return (
    <main className={styles.article_container}>
      <h2 className={styles.article_title}>{article.title}</h2>
      <ArticlesMetaDataCard article={article} />
      <div>
        <p>{article.body}</p>
      </div>

      <ArticleCommentsCard article_id={article_id} />
    </main>
  );
};

export default SingleArticlePage;
