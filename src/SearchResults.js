import React from "react";

export default function SearchResults(props) {
  console.log(props.results);

  if (props.results) {
    console.log();
    return (
      <div className="SearchResults">
        <h3>{props.results.word}The word you searched for</h3>
      </div>
    );
  } else {
    return null;
  }
}
