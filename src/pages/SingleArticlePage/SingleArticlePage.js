import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleArticleCard from "../../components/SingleArticleCard/SingleArticleCard";
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
      {article ? (
        <SingleArticleCard article={article} />
      ) : (
        <p>No Article By That ID Exists</p>
      )}
    </main>
  );
};

export default SingleArticlePage;
