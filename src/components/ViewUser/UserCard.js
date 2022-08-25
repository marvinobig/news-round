import styles from "./ViewUser.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const UserCard = ({ user, username }) => {
  function showForm() {
    const userPopUp = document.querySelector(`#user`);
    userPopUp.showModal();
  }

  function closeForm() {
    const userPopUp = document.querySelector(`#user`);
    userPopUp.close();
  }

  return (
    <>
      <button className={styles.user_btn} onClick={showForm}>
        {username}
      </button>
      <dialog id="user" className={styles.user_container}>
        <div className={styles.close_container}>
          <p>User Info</p>
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
            className={styles.user_img}
            src={user.avatar_url}
            alt={`${user.username} Profile Pic`}
          />
          <div className={styles.users_names}>
            <p className={styles.fullname}>{user.name}</p>
            <p className={styles.username}>{user.username}</p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UserCard;
