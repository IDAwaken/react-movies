import React from "react";
import TrendingMovies from "../movies/TrendingMovies";

const Home = ({ trending = [] }) => {
  return (
    <div className="trending-movies mt-3">
      <h4>Trendng Movies</h4>
      <div className="movies-container">
        {trending.map((trendingMovie) => (
          <TrendingMovies
            key={trendingMovie.id}
            trendingMovie={trendingMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
