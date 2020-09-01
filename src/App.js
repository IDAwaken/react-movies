import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";
import About from "./components/pages/About";

import MovieState from "./context/movies/MovieState";

import "./App.scss";

const App = () => {
  // const [trendingMovies, setTrendingMovies] = useState([]);
  const [alert, setAlert] = useState(null);

  // // ComponentDidMount
  // useEffect(() => {
  //   loadTrendingMoviesData();
  //   // eslint-disable-next-line
  // }, []);

  // // Fetch Weekly Trending Movies
  // const loadTrendingMoviesData = async () => {
  //   const res = await axios.get(
  //     "https://api.themoviedb.org/3/trending/movie/week?api_key=da28ea80576fc0af9b22a9958109445b"
  //   );
  //   setTrendingMovies(res.data.results);
  // };

  // Alert when the search field is empty
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // Timeout for the alert to disappear
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <MovieState>
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
                      // clearMovies={clearMovies}
                      // showClearBtn={movies.length > 0 ? true : false}
                      showAlert={showAlert}
                    />
                    <Movies />
                  </>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/movie/:id" component={MovieDetails} />
            </Switch>
          </div>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
