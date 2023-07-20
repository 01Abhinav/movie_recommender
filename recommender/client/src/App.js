import "./App.css";
import Banner from "./components/banner";
import Search from "./components/search";
import Result from "./components/result";
import React, { useState, useEffect } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [posters, setPosters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch("/getmovies")
      .then((res) => res.json())
      .then((data) => {
        const l = [];
        for (var key in data) {
          l.push(data[key]);
        }
        setMovies(l);
      });
  }, []);
  // `https://api.themoviedb.org/3/movie/${pos}?api_key=bbb4ab124f6a691e76ab14b0866796bc&language=en-US`
  useEffect(() => {
    const getData = async (posters) => {
      const data = Promise.all(
        posters.map(
          async (pos) =>
            await await fetch(
              `https://api.themoviedb.org/3/movie/${pos}?api_key=${process.env.REACT_APP_SECRET}&language=en-US`
            ).then((data) => data.json())
        )
      );
      return data;
    };

    getData(posters)
      .then((data) => {
        const imgurl = [];
        data.forEach((obj) => {
          obj.poster_path
            ? imgurl.push("https://image.tmdb.org/t/p/w500" + obj.poster_path)
            : imgurl.push('/"stock.png"');
        });

        return imgurl;
      })
      .then((o) => setImgs(o));
  }, [posters]);

  return (
    <div className="App" style={{ backgroundColor: "#393E46" }}>
      <Banner />

      <Search movies={movies} setPosters={setPosters} setResults={setResults} />
      <p style={{ color: "white" }}>Top 5 recommended movies</p>
      <Result
        load={results.map(function (el, i) {
          return [el, imgs[i]];
        })}
      />
    </div>
  );
}

export default App;
