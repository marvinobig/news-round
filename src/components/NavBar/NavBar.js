import styles from "./NavBar.module.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import ArticlePostForm from "../ArticlePostForm/ArticlePostForm";
import LoginForm from "../LoginForm/LoginForm";
import CurrUser from "../CurrUser/CurrUser";

const NavBar = () => {
  const { currUser } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <button className={styles.nav_buttons}>Articles</button>
      </Link>
      <CurrUser />
      {currUser.username ? <ArticlePostForm /> : <LoginForm />}
    </nav>
  );
};

export default NavBar;
