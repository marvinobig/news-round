import styles from "./NavBar.module.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import ArticlePostForm from "../ArticlePostForm/ArticlePostForm";
import LoginForm from "../LoginForm/LoginForm";
import CurrUser from "../CurrUser/CurrUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const NavBar = ({ setArticleData }) => {
  const { currUser } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <button className={styles.nav_buttons}>
          <FontAwesomeIcon icon={solid("newspaper")} />
        </button>
      </Link>
      <CurrUser />
      {currUser.username ? (
        <ArticlePostForm setArticleData={setArticleData} />
      ) : (
        <LoginForm />
      )}
    </nav>
  );
};

export default NavBar;
