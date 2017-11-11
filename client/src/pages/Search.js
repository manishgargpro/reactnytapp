import React, { Component } from "react";
import Nav from "../components/Nav.js";
import Title from "../components/Title.js";
import SearchBar from "../components/SearchBar.js"

class Search extends Component {
  render() {
    return (
      <div>
        <Nav searchClass="active"/>
        <Title>
          <h2 className="text-center">Search</h2>
        </Title>
        <SearchBar/>
      </div>
    );
  }
}

export default Search;