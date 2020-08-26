import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  // Update the state when submitting the search
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchMovies(this.state.text);
    this.setState({ text: "" });
  };

  // Tracking input in search field
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row mt-3">
        <div className="col-12">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="text"
                placeholder="Search a movie title..."
                className="form-control w-100 offset md-6 mb-2"
                value={this.state.text}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-block bg-info text-light"
                value="Search"
                onSubmit={this.onSubmit}
              />
            </div>
            <input
              type="submit"
              value="Clear"
              className="btn btn-block bg-dark text-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
