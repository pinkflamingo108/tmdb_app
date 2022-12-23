import React from "react";
import "../App.css";

const Search = () => {
  return (
    <div className="h-80 bg-img">
      <div className="ml-14 pt-8">
        <h2 className="text-white lg:text-7xl md:text-5xl sm:text-2xl font-size-header ">
          Welcome.
        </h2>
        <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl font-size">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>

      <div className=" mt-24 flex items-center justify-center">
        <input
          className="w-4/5 p-2 pl-6  rounded-2xl"
          type="text"
          placeholder="Search for a movie, tv show, person..."
        />
      </div>
    </div>
  );
};

export default Search;
