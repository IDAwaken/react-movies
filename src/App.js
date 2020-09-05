import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import MovieDetails from "./components/movies/MovieDetails";
import About from "./components/pages/About";
import SearchMovies from "./components/pages/SearchMovies";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import axios from "axios";

import MovieState from "./context/movies/MovieState";
import AlertState from "./context/alert/AlertState";

import "./App.scss";

const App = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=da28ea80576fc0af9b22a9958109445b"
      );
      setTrending(res.data.results);
      console.log(res.data.results);
    };

    getTrendingMovies();

    // getTrendingMovies();
    // eslint-disable-next-line
  }, []);

  // // Fetch Weekly Trending Movies
  // const getTrendingMovies = async () => {
  //   const res = await axios.get(
  //     "https://api.themoviedb.org/3/trending/movie/week?api_key=da28ea80576fc0af9b22a9958109445b"
  //   );
  //   setTrending(res.data.results);
  // };

  return (
    <MovieState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => <Home trending={trending} />}
                />
                <Route exact path="/search" component={SearchMovies} />
                <Route exact path="/about" component={About} />
                <Route exact path="/movie/:id" component={MovieDetails} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </MovieState>
  );
};

export default App;
