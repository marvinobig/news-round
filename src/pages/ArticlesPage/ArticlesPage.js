import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import TopicsCard from "../../components/TopicsCard/TopicsCard";
import { fetchArticles } from "../../data/apiCalls";
import styles from "./ArticlesPage.module.css";

const ArticlesPage = ({ articleData }) => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function articlesData() {
      const filter = searchParams.get("topic");
      const sort = searchParams.get("sort_by");
      const order = searchParams.get("order");
      const fetchedArticles = await fetchArticles(
        filter || "",
        sort || "created_at",
        order || "desc"
      );

      setArticles(fetchedArticles);
    }

    articlesData();
  }, [searchParams, articleData]);

  return (
    <main>
      <div className={styles.filter}>
        <TopicsCard setSearchParams={setSearchParams} />
      </div>
      <div className={styles.articles}>
        <ArticlesCard articles={articles} />
      </div>
    </main>
  );
};

export default ArticlesPage;
