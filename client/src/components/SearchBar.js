import React, { Component } from "react";
import API from "../utils/API.js"

class SearchBar extends Component {
  state = {
    q: "",
    begin: "",
    end: "",
    results: []
  };

  search = query => {
    API.search(query)
      .then(res => {
        this.setState({results: res.data.response.docs})
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.q) {
      if (this.state.begin && this.state.end) {
        const searchQuery = {
          params: {
            q: this.state.q,
            begin_date: this.state.begin,
            end_date: this.state.end
          }
        }
        this.search(searchQuery);
      } else {
        const searchQuery = "?q=" + this.state.q
        this.search(searchQuery);
      }
    }
  };

  handleSave = entry => {
    API.saveNew(entry)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div>
      <div className="input-group col-sm-8">
        <span className="input-group-addon" id="query">Search Query</span>
        <input
          className="form-control"
          type="text"
          value={this.state.q}
          onChange={this.handleInputChange}
          name="q"
          placeholder="Keyword"
          aria-describedby="query"
        />
      </div>
      <div className="input-group col-sm-8">
        <span className="input-group-addon" id="beginDate">Begin Date</span>
        <input
          className="form-control"
          type="date"
          value={this.state.begin}
          onChange={this.handleInputChange}
          name="begin"
          aria-describedby="beginDate"
        />
      </div>
      <div className="input-group col-sm-8">
        <span className="input-group-addon" id="endDate">End Date</span>
        <input
          className="form-control"
          type="date"
          value={this.state.end}
          onChange={this.handleInputChange}
          name="end"
          aria-describedby="endDate"
        />
      </div>
      <button
        className="btn btn-default"
        type="button"
        onClick={this.handleFormSubmit}
        disabled={!this.state.q}
      >Search</button>
      <ul>
        {this.state.results.map(result => (
          <li key={result._id}>
            <div className="container-fluid">
              <a href={result.web_url}>{result.headline.main}</a>
              <button
                className="btn btn-default"
                type="button"
                onClick={event => {
                  this.handleSave({
                    title: result.headline.main,
                    url: result.web_url
                  });
                  event.target.disabled = true;
                }}
              >Save</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default SearchBar