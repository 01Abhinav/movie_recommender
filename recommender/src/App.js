import "./App.css";
import Banner from "./components/banner";
import Search from "./components/search";
import Result from "./components/result";
import React, { useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <Banner />
      <Search setResults={setResults} />
      <Result results={results} />
    </div>
  );
}

export default App;
