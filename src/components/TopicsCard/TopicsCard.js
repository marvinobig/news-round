import styles from "./TopicsCard.module.css";
import React, { useEffect, useState } from "react";
import { fetchTopics } from "../../data/apiCalls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const TopicsCard = ({ setSearchParams }) => {
  const [topics, setTopics] = useState([]);
  const [chosenTopic, setChosenTopic] = useState("");
  const [sortInput, setSortInput] = useState("created_at");
  const [orderInput, setOrderInput] = useState("desc");

  useEffect(() => {
    async function topicsData() {
      const fetchedTopics = await fetchTopics();
      setTopics(fetchedTopics);
    }

    topicsData();
  }, []);

  function filterByTopicData(topic) {
    if (topic !== "") {
      setChosenTopic(topic);
      setSearchParams({ topic });
    } else setSearchParams({});
  }

  function refineArticleResults() {
    const refinePopUp = document.querySelector(`#refinePopUp`);

    setSearchParams({
      topic: chosenTopic,
      sort_by: sortInput,
      order: orderInput,
    });

    refinePopUp.close();
  }

  function showRefinePopUp() {
    const refinePopUp = document.querySelector("#refinePopUp");
    refinePopUp.showModal();
  }

  function closeForm() {
    const refinePopUp = document.querySelector(`#refinePopUp`);
    refinePopUp.close();
  }

  return (
    <div className={styles.btn_container}>
      <div className={styles.btns}>
        {topics.map(({ slug }) => {
          return (
            <button
              key={slug}
              onClick={() => filterByTopicData(slug)}
              className={styles.topic_btn}
            >
              {slug[0].toUpperCase() + slug.slice(1)}
            </button>
          );
        })}
      </div>
      <div className={styles.article_btns}>
        <button onClick={showRefinePopUp} className={styles.refine_btn}>
          Refine
        </button>
        <dialog id="refinePopUp" className={styles.refine_popup}>
          <div className={styles.close_container}>
            <p>Refine</p>
            <button
              type="button"
              className={styles.close_btn}
              onClick={closeForm}
            >
              <FontAwesomeIcon icon={solid("xmark")} />
            </button>
          </div>
          <div className={styles.refineInput_container}>
            <label>
              Sort
              <select
                value={sortInput}
                onChange={(e) => setSortInput(e.target.value)}
              >
                <option>author</option>
                <option>title</option>
                <option>created_at</option>
                <option>votes</option>
                <option>comment_count</option>
              </select>
            </label>
            <label>
              Order
              <select
                value={orderInput}
                onChange={(e) => setOrderInput(e.target.value)}
              >
                <option>desc</option>
                <option>asc</option>
              </select>
            </label>
            <button
              className={styles.refine_submit_btn}
              onClick={refineArticleResults}
            >
              Refine
            </button>
          </div>
        </dialog>
        <button
          onClick={() => filterByTopicData("")}
          className={styles.topic_reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TopicsCard;
