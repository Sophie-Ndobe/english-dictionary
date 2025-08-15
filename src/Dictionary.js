import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function displayResults(response) {
    setResults(response.data);
  }

  function submitForm(event) {
    event.preventDefault();

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(displayResults);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>This is the Dictionary Component</h2>
      <form onSubmit={submitForm}>
        <input type="search" onChange={handleChange} />
      </form>
      <SearchResults results={results} />
    </div>
  );
}
