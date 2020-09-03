import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie: { title, id, poster_path, release_date } }) => {
  return (
    <div className="card-group">
      <div className="card text-center d-flex align-items-stretch justify-content-center">
        <Link to={`/movie/${id}`}>
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
          <div className="card-body d-flex align-items-center justify-content-center">
            <span className="card-title m-0">{title}</span>
          </div>
        </Link>
        <div className="card-footer">
          {release_date ? <p>{release_date}</p> : <p>No Date</p>}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
