import React, { useState } from "react";
import TrendingMovies from "../movies/TrendingMovies";
import PopularMovies from "../movies/PopularMovies";
import LatestMovies from "../movies/LatestMovies";
import { Tabs, Tab } from "react-bootstrap";

const Home = ({ trending = [], popular = [], topRated = [] }) => {
  const [key, setKey] = useState("trending");

  return (
    <Tabs
      justify
      variant="tabs"
      defaultActiveKey="trending"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="trending" title="Trending">
        <div className="mt-3">
          <div className="tab-movies-container">
            {trending.map((trendingMovie) => (
              <TrendingMovies
                key={trendingMovie.id}
                trendingMovie={trendingMovie}
              />
            ))}
          </div>
        </div>
      </Tab>
      <Tab eventKey="popular" title="Popular">
        <div className="tab-movies-container">
          {popular.map((popularMovie) => (
            <PopularMovies
              key={popularMovie.id}
              popularMovie={popularMovie}
            />
          ))}
        </div>
      </Tab>
      <Tab eventKey="topRated" title="Top Rated">
        <div className="tab-movies-container">
          {topRated.map((topRatedMovie) => (
            <LatestMovies
              key={topRatedMovie.id}
              topRatedMovie={topRatedMovie}
            />
          ))}
        </div>
      </Tab>
    </Tabs>
  );
};

export default Home;
