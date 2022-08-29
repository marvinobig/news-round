import styles from "./ArticlePostForm.module.css";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import UserContext from "../../contexts/UserContext";
import { fetchTopics, postArticle } from "../../data/apiCalls";

const ArticlePostForm = ({ setArticleData }) => {
  const { currUser } = useContext(UserContext);
  const [topics, setTopics] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [topicInput, setTopicInput] = useState("coding");
  const [contentInput, setContentInput] = useState("");

  useEffect(() => {
    async function topicsData() {
      const fetchedTopics = await fetchTopics();
      setTopics(fetchedTopics);
    }

    topicsData();
  }, []);

  function showForm() {
    const articleForm = document.querySelector(`#addArticleForm`);
    articleForm.showModal();
  }

  async function addArticle() {
    if (titleInput !== "" || contentInput !== "") {
      const articleForm = document.querySelector(`#addArticleForm`);
      const articleObj = {
        title: titleInput,
        topic: topicInput,
        author: currUser.username,
        body: contentInput,
      };
      const addNewArticle = await postArticle(articleObj);

      if (typeof addNewArticle === "object") setArticleData(articleObj);

      articleForm.close();
    }
  }

  function closeForm() {
    const articleForm = document.querySelector(`#addArticleForm`);
    articleForm.close();
  }

  return (
    <>
      <button className={styles.addArticle_btn} onClick={showForm}>
        Post
      </button>
      <dialog id="addArticleForm" className={styles.addArticle_form}>
        <form>
          <div className={styles.close_container}>
            <p>Post An Article</p>
            <button
              type="button"
              className={styles.close_btn}
              onClick={closeForm}
            >
              <FontAwesomeIcon icon={solid("xmark")} />
            </button>
          </div>
          <label htmlFor="title">
            Title
            <input
              id="title"
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </label>
          <label htmlFor="topic">
            Topics
            <select
              id="topic"
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
            >
              {topics.map((topic, index) => {
                return <option key={index}>{topic.slug}</option>;
              })}
            </select>
          </label>
          <div className={styles.username_container}>
            Author <p className={styles.username}>{currUser.username}</p>
          </div>
          <textarea
            id="ArticleBody"
            placeholder="Content"
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
          />
          <div className={styles.btn_container}>
            <button
              type="button"
              onClick={addArticle}
              className={styles.post_btn}
            >
              Post
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ArticlePostForm;
