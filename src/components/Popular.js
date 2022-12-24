import React, { useState, useEffect } from "react";
import axios from "axios";

const Popular = () => {
  let infoContainer = [];
  const [movies, setMovies] = useState([]);

  function fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/2/recommendations?api_key=d15db2786c7e9576fe22f4a84bea426e`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-4 ml-44 text-3xl">Recommended Movies</div>
      <div className="bg-blue-300">
        {movies.map((res, index) => {
          return (
            <div key={index}>
              <img src={res.poster_path} />
              <div>{res.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
