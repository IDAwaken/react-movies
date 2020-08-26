import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie: { title, poster_path } }) => {
  return (
    <div className="card-group">
      <div className="card text-center">
        <div className="card-img-top">
          {{ poster_path } ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt="poster"
            />
          ) : (
            <img src="https://picsum.photos/185" alt="no-poster" />
          )}
        </div>
        <div className="card-body">
          <span className="card-title">{title}</span>
        </div>
        <div className="card-footer">
          <Link to="/" className="btn btn-dark bg-info text-white">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
