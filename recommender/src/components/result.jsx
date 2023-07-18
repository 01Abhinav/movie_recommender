import React, { useState } from "react";

function Result() {
  const [results, setResults] = useState([]);

  return (
    <div class="container ">
      <div class="card-group">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="stock.png" alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="stock.png" alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="stock.png" alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="stock.png" alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src="stock.png" alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
