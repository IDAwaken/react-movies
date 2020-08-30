import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";
import About from "./components/pages/About";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Get trending movies
  // async componentDidMount() {
  //   const res = await axios.get(
  //     "https://api.themoviedb.org/3/trending/movie/week?api_key=da28ea80576fc0af9b22a9958109445b"
  //   );
  //   this.setState({ trendingMovies: res.data.results });
  //   console.log(res.data);
  // }

  // Search Movies
  const searchMovies = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=da28ea80576fc0af9b22a9958109445b&query=${text}`
    );
    setMovies(res.data.results);
    setLoading(false);
  };

  // Get single movie info and reviews
  const getMovie = async (movie_id) => {
    setLoading(true);
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=da28ea80576fc0af9b22a9958109445b&language=en-US
    `);
    setMovie(res.data);
    setLoading(false);
  };

  // Get single movie's review
  const getMovieReviews = async (movie_id) => {
    setLoading(true);
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=da28ea80576fc0af9b22a9958109445b&language=en-US
    `);
    setReviews(res.data.results);
    setLoading(false);
  };

  // Clear Movies from State
  const clearMovies = () => {
    setMovies([]);
    setLoading(false);
  };

  // Alert when the search field is empty
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // Timeout for the alert to disappear
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search
                    searchMovies={searchMovies}
                    clearMovies={clearMovies}
                    showClearBtn={movies.length > 0 ? true : false}
                    showAlert={showAlert}
                  />
                  <Movies loading={loading} movies={movies} />
                </>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/movie/:id"
              render={(props) => (
                <MovieDetails
                  {...props}
                  movie={movie}
                  getMovie={getMovie}
                  loading={loading}
                  reviews={reviews}
                  getMovieReviews={getMovieReviews}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
