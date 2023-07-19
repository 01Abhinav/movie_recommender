function Result({ load }) {
  //console.log(load, "-------  ");
  return (
    <div class="container ">
      <div class="card-group">
        {load.map((res) => {
          //console.log(res, "====|");
          return (
            <div key={res[0]} class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={res[1]} alt="Card image cap" />
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
