import React, { useEffect, useState } from "react";
import { fetchTopics } from "../../data/apiCalls";

const TopicsCard = ({ setCurrTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    async function topicsData() {
      const fetchedTopics = await fetchTopics();
      setTopics((currTopics) => (currTopics = fetchedTopics));
    }

    topicsData();
  }, []);

  function filterByTopic(topic) {
    setCurrTopic((currTopic) => (currTopic = topic));
  }
  return (
    <>
      {topics.map(({ slug }) => {
        return (
          <button key={slug} onClick={() => filterByTopic(slug)}>
            {slug}
          </button>
        );
      })}
      <button onClick={() => filterByTopic("")}>Reset</button>
    </>
  );
};

export default TopicsCard;
