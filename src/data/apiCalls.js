exports.fetchArticles = async () => {
  const articles = await fetch(
    "https://news-round-api.herokuapp.com/api/articles"
  );
  const articlesJson = await articles.json();

  return articlesJson.articles;
};
