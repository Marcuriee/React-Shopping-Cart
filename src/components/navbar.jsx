import React, { Component } from 'react';

// Stateless Functional Component(just a method, as it was not necessary
// to have a class for this

const NavBar = ({ totalCounters }) => { // so that we don't have to repeat this.props throughout code
// we're picking the property of the props that we're interested in with totalCounters
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
      Navbar{" "}
      <span className="badge badge-pill badge-secondary">
        {totalCounters}
      </span>
      </a>
    </nav>
  );
};

export default NavBar
