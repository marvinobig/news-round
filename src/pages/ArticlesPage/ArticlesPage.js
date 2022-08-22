import React, { useEffect, useState } from "react";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import TopicsCard from "../../components/TopicsCard/TopicsCard";
import { fetchArticles } from "../../data/apiCalls";
import styles from "./ArticlesPage.module.css";

const ArticlesPage = ({ currTopic, setCurrTopic }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function articlesData() {
      const fetchedArticles = await fetchArticles(currTopic);
      setArticles((currArticles) => (currArticles = fetchedArticles));
    }

    articlesData();
  }, [currTopic]);
  return (
    <main className={styles.articles}>
      <div>
        <TopicsCard setCurrTopic={setCurrTopic} />
      </div>
      <ArticlesCard articles={articles} />
    </main>
  );
};

export default ArticlesPage;
