import React from "react";

const Navigation = () => {
  return (
    <div className="bg-color text-white h-16 flex items-center">
      <div>
        <img
          onClick={(event) => (window.location.href = "/")}
          className="w-40 h-20 ml-4 hover:cursor-pointer"
          alt="tmdb logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        />
      </div>
    </div>
  );
};

export default Navigation;
