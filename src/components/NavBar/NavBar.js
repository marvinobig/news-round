import styles from "./NavBar.module.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import PostForm from "../PostForm/PostForm";

const NavBar = () => {
  const { currUser } = useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <button className={styles.nav_buttons}>Articles</button>
      </Link>
      <h1>News Round</h1>
      {currUser === {} ? (
        <PostForm />
      ) : (
        <Link to="users">
          <button className={styles.nav_buttons}>Login</button>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;