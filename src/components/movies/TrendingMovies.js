import React from "react";

const TrendingMovies = ({ movie: { title, poster_path, release_date } }) => {
  return (
    <div className="mt-2">
      <p>{title}</p>
      <p>{poster_path}</p>
      <p>{release_date}</p>
    </div>
  );
};

export default TrendingMovies;
