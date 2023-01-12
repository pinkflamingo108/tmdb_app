import React from "react";
import "../App.css";
import Navigation from "../components/Navigation";
import Search from "../components/Search";
import Popular from "../components/Popular";

function Homepage() {
  return (
    <div>
      <Navigation />
      <Search />
      <Popular />
    </div>
  );
}

export default Homepage;
