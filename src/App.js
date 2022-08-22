import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import NavBar from "./components/NavBar/NavBar";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  const [currUser, setCurrUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currUser, setCurrUser }}>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>

          <Routes>
            <Route path="/" element={<ArticlesPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
