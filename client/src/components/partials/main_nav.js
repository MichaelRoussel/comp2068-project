import React from "react";
import { Link } from "react-router-dom";

const dropdownStyle = {
  .dropdown:hover .dropdown-menu {
  display: block;
}}

function MainNav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Electronics
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
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Phones
            </a>

            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/phones">
                All Phones
              </Link>
              <Link className="dropdown-item" to="/phones/new">
                New Phone
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Monitors
            </a>

            <div className="dropdown-menu" style=>
              <Link className="dropdown-item" to="/monitors">
                All Monitors
              </Link>
              <Link className="dropdown-item" to="/monitors/new">
                New Monitor
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
