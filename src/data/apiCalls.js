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
