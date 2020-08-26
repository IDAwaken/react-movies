import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Movies from "./components/movies/Movies";
import axios from "axios";
import "./App.scss";

class App extends Component {
  state = {
    movies: [],
    searchQuery: "fast and furious",
    loading: false,
  };

  // Fetching movies from the API
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=da28ea80576fc0af9b22a9958109445b&query=${this.state.searchQuery}`
    );
    this.setState({ movies: res.data.results, loading: false });
    console.log(this.state.movies);
  }

  // Search Movies
  searchMovies = (text) => {
    console.log(text);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Search searchMovies={this.searchMovies} />
            <Movies loading={this.state.loading} movies={this.state.movies} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
