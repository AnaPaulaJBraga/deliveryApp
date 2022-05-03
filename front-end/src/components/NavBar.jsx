import React from 'react';
// import Button from 'react-bootstrap/esm/Button';
import NavBarButtons from './NavBarButtons';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="myProduct">PRODUTOS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <NavBarButtons />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
