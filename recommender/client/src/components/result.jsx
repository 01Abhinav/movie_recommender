function Result({ load }) {
  return (
    <div class="container container-fluid">
      <div class="card-group">
        {load.map((res) => {
          console.log(res, "====|");
          return (
            <div
              key={res[0]}
              class="card mb-5 mt-1"
              style={{ width: "18rem", backgroundColor: "#00ADB5" }}
            >
              <img class="card-img-top" src={res[1]} alt="Card cap" />
              <div class="card-body">
                <p class="card-text">{res[0]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
