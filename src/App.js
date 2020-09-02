import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
// import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import MovieState from "./context/movies/MovieState";
import AlertState from "./context/alert/AlertState";

import "./App.scss";

const App = () => {
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

  return (
    <MovieState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/movie/:id" component={MovieDetails} />
                <Route component={NotFound} className="mt-3" />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </MovieState>
  );
};

export default App;
