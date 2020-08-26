import React from "react";
import MovieItem from "./MovieItem";
import Spinner from "../layout/Spinner";

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

export default Movies;
