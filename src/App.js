import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import SingleArticlePage from "./pages/SingleArticlePage/SingleArticlePage";

function App() {
  const [currUser, setCurrUser] = useState({});
  const [articleData, setArticleData] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currUser, setCurrUser }}>
        <div className={styles.app}>
          <NavBar setArticleData={setArticleData} />
          <Routes>
            <Route
              path="/"
              element={<ArticlesPage articleData={articleData} />}
            />
            <Route
              path="/articles/:article_id"
              element={<SingleArticlePage />}
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
