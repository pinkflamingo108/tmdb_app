import React, { useState, useEffect } from "react";
import "../styles/Navigation.css";
import axios from "axios";

const Popular = () => {
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
      <div className="mt-4 ml-44 text-3xl mb-4">Recommended Movies</div>
      <div className="ml-36 mr-36 ">
        <div>
          <div className=" container-movies  movie-img ">
            <div className="flex justify-center">
              {movies.map((res, index) => {
                return (
                  <div key={index} className="m-4 ">
                    <img
                      alt={`${res.title} movie img`}
                      className="img-size rounded-lg cursor-pointer"
                      src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                    />
                    <div className=" mt-4  container-placement">
                      <div className="flex ">
                        <div className="bg-black text-white w-12 h-12 container-radius flex justify-center items-center mb-4">
                          {res.vote_average}
                        </div>
                      </div>
                      <div className="font-semibold w-24">{res.title}</div>
                      <div>{res.release_date}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
