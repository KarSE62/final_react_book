import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './page/Home'
import Search from "./components/Search";
import DetailBook from "./page/DetailBook";

function App() {
  const [books, setBooks] = useState([]);

  const getbook = async () => {
    const data = await axios.get("https://se-book-store.herokuapp.com/api/v1/books",{});
    setBooks(data.data);
  };

  const getdetailbook = async (isbn) => {
    const data = await axios.get(
      `https://se-book-store.herokuapp.com/api/v1/books/${isbn}`,{}
    );
    setBooks(data.data);
  };

  

  return (
    <Router>
      <Search />
      <Routes>
        <Route path="/" element={<Home handledOnLoad={getbook} books={books} />} />
        <Route path="/Detail/:isbn" element={<DetailBook getdetailbook={getdetailbook} books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
