import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src={require("./icon.png")}
          alt="icon"
          style={{ width: 40, height: 40 }}
        />
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
              Beer World
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/beers">
              Beers
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
              Beers
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/beers/myBeer">
                My Beers
              </Link>
              <Link className="dropdown-item" to="/beers/new">
                New Beer
              </Link>
            </div>
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
        </ul>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
