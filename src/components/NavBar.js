// import PropTypes from 'prop-types'
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-success fs-2 bg-success p-4 " style={{color: "red"}}>
        <div className="container-fluid text-danger">
          <Link className="navbar-brand fs-1" to="/">
           <i> News From Shahvaiz </i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  <b className="links mx-3 text-info" >Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  <b className="links mx-3 text-info" >Business</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  <b className="links mx-3 text-info" >Entertainment</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  <b className="links mx-3 text-info" >Health</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  <b className="links mx-3 text-info" >Science</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  <b className="links mx-3 text-info" >Sports</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  <b className="links mx-3 text-info" >Technology</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
};

export default NavBar;
