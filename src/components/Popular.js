import { info } from "autoprefixer";
import React, { useState, useEffect } from "react";
const mainInfo = [];

const Popular = () => {
  async function fetchRecommended() {
    await fetch(
      `https://api.themoviedb.org/3/movie/2/recommendations?api_key=d15db2786c7e9576fe22f4a84bea426e`
    )
      .then((res) => res.json())
      .then((info) => {
        let information = info?.results;
        Promise.all(information).then((res) => {
          mainInfo.push(res);
        });
      });

    return mainInfo;
  }

  useEffect(() => {
    fetchRecommended();
    console.log(mainInfo);
  }, []);

  return (
    <div>
      <div className="mt-4 ml-44 text-3xl">Recommended Movies</div>
      <div></div>
    </div>
  );
};

export default Popular;
