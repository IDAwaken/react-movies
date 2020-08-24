import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Search />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
