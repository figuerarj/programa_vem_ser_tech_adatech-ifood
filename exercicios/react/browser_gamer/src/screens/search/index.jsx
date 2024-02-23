import React, { useState } from "react";
import "./styles.css";
import SearchBar from "../../components/searchBar";
import SearchResults from "../../components/searchResults";

const Search = () => {

  const [results, setResults] = useState([])
  return (
    <div className="Search">
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SearchResults results={results}/>
      </div>
    </div>
  );
};

export default Search;
