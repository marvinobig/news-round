import styles from "./ArticleMetaDataCard.module.css";
import React, { useContext } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import LikeCard from "../LikeCard/LikeCard";
import ViewUser from "../ViewUser/ViewUser";
import Delete from "../Delete/Delete";
import UserContext from "../../contexts/UserContext";

const ArticlesMetaDataCard = ({ article }) => {
  const { currUser } = useContext(UserContext);
  return (
    <div className={styles.meta_container}>
      <div className={styles.article_data}>
        <ViewUser username={article.author} />
        <p className={styles.topic}>{article.topic}</p>
      </div>
      <p className={styles.date}>
        {moment(article.created_at).format("MMMM Do YYYY, hh:mm a")}
      </p>
      <div className={styles.article_performance}>
        <p>
          <FontAwesomeIcon icon={solid("comments")} /> {article.comment_count}
        </p>
        {article.votes >= 0 ? (
          <LikeCard votes={article.votes} article_id={article.article_id} />
        ) : (
          <p>Not Logged In</p>
        )}
        {currUser.username && article.author === currUser.username ? (
          <Delete infoToDelete={"article"} id={article.article_id} />
        ) : (
          <br />
        )}
      </div>
    </div>
  );
};

export default ArticlesMetaDataCard;
