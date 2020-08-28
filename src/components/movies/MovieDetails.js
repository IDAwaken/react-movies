import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Badge from "./Badge";

class MovieDetails extends Component {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    const {
      vote_average,
      title,
      release_date,
      overview,
      poster_path,
      genres = [],
    } = this.props.movie;

    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className="row my-2">
          <div className="col-12 col-sm-12">
            <Link to="/" className="btn bg-info text-light mb-2 btn-sm">
              <i className="fa fa-arrow-left" /> Back To Search
            </Link>
            <div className="card">
              <div className="row">
                <div className="col-4 mx-auto p-0">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt=""
                    style={{ width: "100%" }}
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
                          <Badge key={genre.id} genre={genre} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MovieDetails;
