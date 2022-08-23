import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCommentsCard from "../../components/ArticleCommentsCard/ArticleCommentsCard";
import { fetchArticleById } from "../../data/apiCalls";

const SingleArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function articleData() {
      const fetchedArticle = await fetchArticleById(article_id);

      setArticle((currArticle) => (currArticle = fetchedArticle));
    }

    articleData();
  }, [article_id]);

  return (
    <main>
      <h2>{article.title}</h2>

      <div>
        <p>{article.body}</p>
      </div>

      <ArticleCommentsCard article_id={article_id} />
    </main>
  );
};

export default SingleArticlePage;
