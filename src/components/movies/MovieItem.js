import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie: { title, poster_path } }) => {
  return (
    <div className="card-group">
      <div className="card text-center">
        <div className="card-img-top">
          {poster_path == null ? (
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
              alt="poster-icon"
              style={{ width: "100%" }}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w185/${poster_path}
            `}
              alt="poster-icon"
            />
          )}
        </div>
        <div className="card-body">
          <span className="card-title card-text-size">{title}</span>
        </div>
        <div className="card-footer">
          <Link to="/" className="btn btn-dark bg-info text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
