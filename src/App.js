import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import Movies from "./components/movies/Movies";
import axios from "axios";
import "./App.scss";

class App extends Component {
  state = {
    movies: [],
    loading: false,
    alert: null,
  };

  // Search Movies
  searchMovies = async (text) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=da28ea80576fc0af9b22a9958109445b&query=${text}`
    );
    this.setState({ movies: res.data.results, loading: false });
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
    const { movies, loading, alert } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Search
              searchMovies={this.searchMovies}
              clearMovies={this.clearMovies}
              showClearBtn={movies.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <Movies loading={loading} movies={movies} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
