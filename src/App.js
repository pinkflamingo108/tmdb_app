import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import MovieInfo from "./pages/MovieInfo";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/movies/:movieId" element={<MovieInfo />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
