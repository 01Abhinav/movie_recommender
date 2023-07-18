import React, { useState } from "react";
function Search() {
  const [name, setName] = useState("");

  function submit() {}

  return (
    <div class="container d-flex">
      <div class="input-group mb-3 mt-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Enter Movie Name
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Enter Movie Name"
          aria-describedby="inputGroup-sizing-default"
          value={name}
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="button" class="btn btn-dark " onClick={submit}>
        Search
      </button>
    </div>
  );
}

export default Search;
