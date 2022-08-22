import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";

function App() {
  const [currUser, setCurrUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currUser, setCurrUser }}>
        <div className={styles.app}>
          <NavBar />

          <Routes>
            <Route path="/" element={<ArticlesPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
