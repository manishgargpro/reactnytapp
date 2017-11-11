import React, { Component } from "react";
import API from "../utils/API.js"

class SavedBar extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getArticles()
  }

  getArticles = () => {
    API.getSaved()
      .then(res => {
        this.setState({results: res.data})
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  };

  render() {
    return <div>
      <ul>
        {this.state.results.map(result => (
          <li key={result._id}>
            <div className="container-fluid">
              <a href={result.url}>{result.title}</a>
              <button
                className="btn btn-default"
                type="button"
                onClick={() => {
                  API.delete(result._id)
                  .then(res => {
                    console.log(res);
                    this.getArticles();
                  })
                  .catch(err => console.log(err));
                }}
              >Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default SavedBar