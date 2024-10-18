import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light shadow-sm " style={{position:"sticky",top:"0",zIndex:"9999"}}>
          <div className="container">
        {/* <Link className="navbar-brand" to="/">MyStore</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav" style={{fontSize:"18px"}}>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ourProducts">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
