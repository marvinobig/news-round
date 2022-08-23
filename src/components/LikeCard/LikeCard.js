import styles from "./LikeCard.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { decrementVotes, updateVotes } from "../../data/apiCalls";

const LikeCard = ({ article_id, votes }) => {
  const [likes, setLikes] = useState(votes);

  async function addLike() {
    setLikes((currLikes) => currLikes + 1);
    await updateVotes(article_id, Number(votes));
  }

  async function removeLike() {
    if (likes !== 0) {
      setLikes((currLikes) => currLikes - 1);
      await decrementVotes(article_id, Number(votes));
    }
  }

  return (
    <>
      <button className={styles.likes} onClick={addLike}>
        <FontAwesomeIcon icon={solid("thumbs-up")} /> {likes}
      </button>
      <button className={styles.dislikes} onClick={removeLike}>
        <FontAwesomeIcon icon={solid("thumbs-down")} />
      </button>
    </>
  );
};

export default LikeCard;
