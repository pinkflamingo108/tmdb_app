import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Navigation.css";

function MovieInfo() {
  const [movies, setMovies] = useState([]);

  //This gets the info from the url movie id
  const params = useParams();
  const movieId = params.movieId;

  //This gets the year

  function fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d15db2786c7e9576fe22f4a84bea426e&language=en-US`
      )
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/original${movies.backdrop_path}` +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex bg-blue-200 pt-10 pb-10 pl-10"
      >
        <div>
          <img
            className="poster-img rounded-lg"
            src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
            alt={movies.title}
          />
        </div>
        <div className="w-1/2 ml-14">
          <div>
            <span className="text-3xl font-bold">{movies.original_title}</span>
            <span className="text-2xl grey-text ml-2">
              ({movies.release_date})
            </span>
          </div>
          <div>
            <h3 className="text-xl">Overview</h3>
            <p>{movies.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
