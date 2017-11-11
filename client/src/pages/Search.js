import React, { Component } from "react";
import Nav from "../components/Nav.js";
import Title from "../components/Title.js"

class Search extends Component {
  render() {
    return (
      <div>
        <Nav searchClass="active"/>
        <Title>
          <h2 className="text-center">Search</h2>
        </Title>
      </div>
    );
  }
}

export default Search;