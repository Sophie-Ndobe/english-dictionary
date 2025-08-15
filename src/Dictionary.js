import React from "react";

export default function Dictionary() {
  function submitForm(event) {
    event.preventDefault();
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
