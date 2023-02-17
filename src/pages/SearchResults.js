import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [info, setInfo] = useState([]);

  const params = useParams();
  const movieId = params.searchTerm;

  function fetchData() {
    //image.tmdb.org/t/p/original/6BF18oLINXIs1FZCZBAV1JOJx5h.png logo example

    https: axios
      .get(
        `https://api.themoviedb.org/3/search/company?api_key=d15db2786c7e9576fe22f4a84bea426e&query=${movieId}&page=1`
      )
      .then((res) => {
        setInfo(res.data.results);
        console.log(res.data.results);
        setTimeout(() => {
          console.log(info);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {info.map((res) => {
        return <div>{res.name}</div>;
      })}
    </div>
  );
};

export default SearchResults;
