import React from "react";

const Nav = props =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          NYT Article Log
        </a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className={props.searchClass}><a href="/">Search</a></li>
          <li className={props.savedClass}><a href="/saved">Saved</a></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;
