import React, { Component } from "react";
import Nav from "../components/Nav.js";
import Title from "../components/Title.js"

class Search extends Component {
  render() {
    return (
      <div>
        <Nav savedClass="active"/>
        <Title>
          <h2 className="text-center">Saved</h2>
        </Title>
      </div>
    );
  }
}

export default Search;