import styles from "./LoginForm.module.css";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import UserContext from "../../contexts/UserContext";
import { fetchUsers } from "../../data/apiCalls";

const LoginForm = () => {
  const [users, setUsers] = useState([]);
  const { setCurrUser } = useContext(UserContext);
  const [loginInput, setLoginInput] = useState("");

  useEffect(() => {
    async function usersData() {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    }

    usersData();
  }, []);

  function showForm() {
    const loginForm = document.querySelector(`#addLoginForm`);
    loginForm.showModal();
  }

  function addLogin() {
    if (loginInput !== "") {
      const loginForm = document.querySelector(`#addLoginForm`);
      const loggedInUser = users.filter((user) => user.username === loginInput);

      setCurrUser(...loggedInUser);
      loginForm.close();
    }
  }

  function closeForm() {
    const loginForm = document.querySelector(`#addLoginForm`);
    loginForm.close();
  }

  return (
    <>
      <button className={styles.addLogin_btn} onClick={showForm}>
        Login
      </button>
      <dialog id="addLoginForm" className={styles.addLogin_form}>
        <form>
          <div className={styles.close_container}>
            <p>Login</p>
            <button
              type="button"
              className={styles.close_btn}
              onClick={closeForm}
            >
              <FontAwesomeIcon icon={solid("xmark")} />
            </button>
          </div>

          <label htmlFor="userLogin">
            Username
            <input
              id="userLogin"
              type="text"
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
            />
          </label>

          <div className={styles.btn_container}>
            <button
              type="button"
              onClick={addLogin}
              className={styles.post_btn}
            >
              Login
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default LoginForm;
