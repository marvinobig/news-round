exports.fetchArticles = async (filter) => {
  const articles = await fetch(
    `https://news-round-api.herokuapp.com/api/articles?filter=${filter}`
  );
  const articlesJson = await articles.json();

  return articlesJson.articles;
};

exports.fetchTopics = async () => {
  const topics = await fetch("https://news-round-api.herokuapp.com/api/topics");
  const topicsJson = await topics.json();

  return topicsJson.topics;
};

exports.fetchArticleById = async (article_id) => {
  const article = await fetch(
    `https://news-round-api.herokuapp.com/api/articles/${article_id}`
  );
  const articleJson = await article.json();

  return articleJson.article;
};

exports.fetchArticleComments = async (article_id) => {
  const articleComments = await fetch(
    `https://news-round-api.herokuapp.com/api/articles/${article_id}/comments`
  );
  const articleCommentsJson = await articleComments.json();

  return articleCommentsJson.articleComments;
};
