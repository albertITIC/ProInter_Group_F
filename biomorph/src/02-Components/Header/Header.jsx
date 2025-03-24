import React from 'react';

const Header = () => {
  return (
    <header className="container-fluid bg-light py-3">
      <div className="row">
        <div className="col-12 col-lg-12 d-flex justify-content-between align-items-center">
          <h1 className="m-0">My Website</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
