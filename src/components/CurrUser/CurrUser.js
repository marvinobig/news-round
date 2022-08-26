import styles from "./CurrUser.module.css";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import UserContext from "../../contexts/UserContext";

const CurrUser = () => {
  const { currUser, setCurrUser } = useContext(UserContext);

  function showForm() {
    const currUserPopUp = document.querySelector(`#currUser`);
    currUserPopUp.showModal();
  }

  function closeForm() {
    const currUserPopUp = document.querySelector(`#currUser`);
    currUserPopUp.close();
  }

  function logout() {
    const currUserPopUp = document.querySelector(`#currUser`);
    setCurrUser({});
    currUserPopUp.close();
  }

  return (
    <>
      {currUser.username ? (
        <button className={styles.currUser_btn} onClick={showForm}>
          {currUser.username}
        </button>
      ) : (
        <h1>NewsRound</h1>
      )}

      <dialog id="currUser" className={styles.currUser}>
        <div className={styles.currUser_container}>
          <div className={styles.close_container}>
            <p>Current User</p>
            <button
              type="button"
              className={styles.close_btn}
              onClick={closeForm}
            >
              <FontAwesomeIcon icon={solid("xmark")} />
            </button>
          </div>
          <div className={styles.user_info}>
            <img
              src={currUser.avatar_url}
              alt={`${currUser.username} Profile Pic`}
              className={styles.user_img}
            />
            <div className={styles.users_names}>
              <p className={styles.fullname}>{currUser.name}</p>
              <p className={styles.username}>{currUser.username}</p>
            </div>
          </div>

          <button className={styles.logout_btn} onClick={logout}>
            Logout
          </button>
        </div>
      </dialog>
    </>
  );
};

export default CurrUser;
