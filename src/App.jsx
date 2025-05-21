import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <SearchBar onSearch={(query) => console.log(query)} />
    </>
  );
}

export default App;
