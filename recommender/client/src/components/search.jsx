import React, { useState } from "react";
import Select from "react-select";
function Search({ movies, setResults, setPosters }) {
  const [name, setName] = useState("");

  function submit() {
    fetch("/data/" + name)
      .then((res) => res.json())
      .then((data) => {
        setPosters(data.ids);
        setResults(data.recommendations);
        console.log(data.ids, data.recommendations);
      });
  }

  return (
    <div class="container-fluid mt-3 mb-3">
      <div class="row">
        <div className="col "></div>
        <div className="col col-lg-8">
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                text: "orangered",
                primary25: "orange",
                primary: "black",
              },
            })}
            options={movies.map((o) => ({ label: o, value: o }))}
            onChange={(e) => setName(e.value)}
          />
        </div>
        <div className="col">
          <button type="button" class="btn btn-dark" onClick={submit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
