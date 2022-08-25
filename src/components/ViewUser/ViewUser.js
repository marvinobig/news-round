import React, { useEffect, useState } from "react";
import { fetchUserById } from "../../data/apiCalls";
import UserCard from "./UserCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ViewUser = ({ username }) => {
  const [user, setUser] = useState([{}]);

  useEffect(() => {
    async function userData() {
      const fetchedUser = await fetchUserById(username);
      setUser(fetchedUser);
    }

    userData();
  }, [setUser, username]);

  return (
    <>
      {user && username ? (
        <UserCard user={user} username={username} />
      ) : (
        <FontAwesomeIcon icon={solid("user")} />
      )}
    </>
  );
};

export default ViewUser;
