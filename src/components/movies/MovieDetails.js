import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Reviews from "../reviews/Reviews";

const MovieDetails = ({
  movie,
  loading,
  getMovie,
  getMovieReviews,
  match,
  reviews,
}) => {
  useEffect(() => {
    getMovie(match.params.id);
    getMovieReviews(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    vote_average,
    title,
    release_date,
    overview,
    poster_path,
    genres = [],
  } = movie;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="row my-2 mx-0">
        <div className="col-12 col-sm-12 p-0">
          <Link to="/" className="btn bg-info text-light mb-2 btn-sm">
            <i className="fa fa-arrow-left" /> Back To Search
          </Link>
          <div className="card">
            <div className="row m-0">
              <div className="col-4 mx-auto p-0">
                <img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card-body">
                  <div className="card-title">
                    <h4>{title}</h4>
                    <p>Release Date: {release_date}</p>
                    <p>{overview}</p>
                    <p>Rate: {vote_average}/10</p>
                    <div>
                      Genres:
                      {genres.map((genre) => (
                        <span
                          className="badge badge-danger ml-2"
                          key={genre.id}
                          genre={genre}
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reviews reviews={reviews} />
      </div>
    );
  }
};

export default MovieDetails;
