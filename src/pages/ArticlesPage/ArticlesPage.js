import React, { useEffect, useState } from "react";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import { fetchArticles } from "../../data/apiCalls";
import styles from "./ArticlesPage.module.css";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function articlesData() {
      const fetchedArticles = await fetchArticles();

      console.log(fetchedArticles);
      setArticles((currArticles) => (currArticles = fetchedArticles));
    }

    articlesData();
  }, []);
  return (
    <main className={styles.articles}>
      <ArticlesCard articles={articles} />
    </main>
  );
};

export default ArticlesPage;
