import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import MovieDetails from "./components/movies/MovieDetails";
import About from "./components/pages/About";
import SearchMovies from "./components/pages/SearchMovies";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";

import MovieState from "./context/movies/MovieState";
import AlertState from "./context/alert/AlertState";

import "./App.scss";

const App = () => {
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
