import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/#">
            React App
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                
                <li className="nav-item">
                  <NavLink
                    to="/Users"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Users
                  </NavLink>
                </li>

            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }

  
}

export default NavBar;
