import React from "react";
import axios from "axios";

export default function Dictionary() {
  function displayResults(response) {
    console.log(response);
  }

  function submitForm(event) {
    event.preventDefault();

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=key&key=${apiKey}`;

    axios.get(apiUrl).then(displayResults);
  }

  function handleChange(event) {
    alert(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>This is the Dictionary Component</h2>
      <form onSubmit={submitForm}>
        <input type="search" onChange={handleChange} />
      </form>
    </div>
  );
}
