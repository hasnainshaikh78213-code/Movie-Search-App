import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="movie-card">
      <img src={poster} alt={movie.Title} />
      <Link to={`/movie/${movie.imdbID}`}></Link>
      <h3>{movie.Title}</h3>
    </div>
  );
};

export default MovieCard;
