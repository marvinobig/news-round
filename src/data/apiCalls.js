const fetchArticles = async (filter, sort, order) => {
  const articles = await fetch(
    `https://news-round-api.herokuapp.com/api/articles?filter=${filter}&sort_by=${sort}&order_by=${order}`
  );
  const articlesJson = await articles.json();

  return articlesJson.articles;
};

const fetchTopics = async () => {
  const topics = await fetch("https://news-round-api.herokuapp.com/api/topics");
  const topicsJson = await topics.json();

  return topicsJson.topics;
};

const fetchArticleById = async (article_id) => {
  const article = await fetch(
    `https://news-round-api.herokuapp.com/api/articles/${article_id}`
  );
  const articleJson = await article.json();

  return articleJson.article;
};

const fetchArticleComments = async (article_id) => {
  const articleComments = await fetch(
    `https://news-round-api.herokuapp.com/api/articles/${article_id}/comments`
  );
  const articleCommentsJson = await articleComments.json();

  return articleCommentsJson.articleComments;
};

const updateVotes = async (article_id) => {
  const voteObj = { inc_votes: 1 };
  const incrementVote = await fetch(
    `https://news-round-api.herokuapp.com/api/articles/${article_id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voteObj),
    }
  );
  const incrementVoteJson = await incrementVote.json();

  return incrementVoteJson;
};

const decrementVotes = async (article_id) => {
  const voteObj = { inc_votes: -1 };
  const decrementVote = await fetch(
    `https://news-round-api.herokuapp.com/api/articles/${article_id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(voteObj),
    }
  );
  const decrementVoteJson = await decrementVote.json();

  return decrementVoteJson;
};

const fetchUsers = async () => {
  const users = await fetch("https://news-round-api.herokuapp.com/api/users");
  const usersJson = await users.json();

  return usersJson.users;
};

const postComment = async (article_id, commentObj) => {
  const comment = await fetch(
    `https://news-round-api.herokuapp.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentObj),
    }
  );
  const commentJson = await comment.json();

  return commentJson;
};

const postArticle = async (articleObj) => {
  const article = await fetch(
    "https://news-round-api.herokuapp.com/api/articles",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articleObj),
    }
  );
  const articleJson = await article.json();

  return articleJson;
};

const fetchUserById = async (username) => {
  const user = await fetch(
    `https://news-round-api.herokuapp.com/api/users/${username}`
  );
  const userJson = await user.json();

  return userJson.user;
};

const deleteArticleOrCommentById = async (infoToDelete, id) => {
  if (infoToDelete === "article") {
    const articleToDelete = await fetch(
      `https://news-round-api.herokuapp.com/api/articles/${id}`,
      {
        method: "DELETE",
      }
    );

    return articleToDelete;
  }

  if (infoToDelete === "comment") {
    const commentToDelete = await fetch(
      `https://news-round-api.herokuapp.com/api/comments/${id}`,
      {
        method: "DELETE",
      }
    );

    return commentToDelete;
  }
};

export {
  fetchArticles,
  fetchTopics,
  fetchArticleById,
  fetchArticleComments,
  updateVotes,
  decrementVotes,
  fetchUsers,
  postComment,
  postArticle,
  fetchUserById,
  deleteArticleOrCommentById,
};
