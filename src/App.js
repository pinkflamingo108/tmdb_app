import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import MovieInfo from "./pages/MovieInfo";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieInfo />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
