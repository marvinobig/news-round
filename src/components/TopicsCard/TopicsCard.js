import styles from "./TopicsCard.module.css";
import React, { useEffect, useState } from "react";
import { fetchTopics } from "../../data/apiCalls";

const TopicsCard = ({ setSearchParams }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function topicsData() {
      const fetchedTopics = await fetchTopics();
      setTopics((currTopics) => (currTopics = fetchedTopics));
    }

    topicsData();
  }, []);

  function filterByTopic(topic) {
    setSearchParams({ topic });
  }

  return (
    <div className={styles.btn_container}>
      <div className={styles.btns}>
        {topics.map(({ slug }) => {
          return (
            <button
              key={slug}
              onClick={() => filterByTopic(slug)}
              className={styles.topic_btn}
            >
              {slug[0].toUpperCase() + slug.slice(1)}
            </button>
          );
        })}
      </div>
      <button onClick={() => filterByTopic("")} className={styles.topic_reset}>
        Reset
      </button>
    </div>
  );
};

export default TopicsCard;
