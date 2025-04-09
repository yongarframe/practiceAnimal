import { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./page/Main";
import Deatil from "./page/Detail";
import Search from "./page/search";

function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => navigate(`/search?animal=${inputValue}`)}>
          검색
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Deatil />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <footer>all rights reserved to OZ</footer>
    </>
  );
}

export default App;
