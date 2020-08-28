import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";
import About from "./components/pages/About";
import axios from "axios";
import "./App.scss";

class App extends Component {
  state = {
    movies: [],
    movie: {},
    trendingMovies: [],
    loading: false,
    alert: null,
  };

  // Get trending movies
  async componentDidMount() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=da28ea80576fc0af9b22a9958109445b"
    );
    this.setState({ trendingMovies: res.data.results });
  }

  // Search Movies
  searchMovies = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=da28ea80576fc0af9b22a9958109445b&query=${text}`
    );
    this.setState({ movies: res.data.results, loading: false });
  };

  // Get single movie info
  getMovie = async (movie_id) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=da28ea80576fc0af9b22a9958109445b&language=en-US
    `);
    this.setState({ movie: res.data, loading: false });
  };

  // Clear Movies from State
  clearMovies = () => {
    this.setState({
      movies: [],
      loading: false,
    });
  };

  // Alert when the search field is empty
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type,
      },
    });
    // Timeout for the alert to disappear
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    const { movies, movie, loading, alert } = this.state;

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
                      searchMovies={this.searchMovies}
                      clearMovies={this.clearMovies}
                      showClearBtn={movies.length > 0 ? true : false}
                      setAlert={this.setAlert}
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
                    getMovie={this.getMovie}
                    movie={movie}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
