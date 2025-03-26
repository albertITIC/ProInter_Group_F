import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(prev => !prev);
  };

  return (
    <header className="container-fluid py-3">
      <div className="row header">
        <div className="header__row col-12 col-lg-12">
          <h1 className="header__title">BIOMORPH</h1>
          <nav>
            <div className="header__nav-item">
              <a className="header__link" href="/">HOME</a>
            </div>
            <div className="header__nav-item">
              <a className="header__link" href="/shop">SHOP</a>
            </div>
            <div className="header__nav-item">
              <a className="header__link" href="/shop">ABOUT US</a>
            </div>
            <div className="header__nav-item">
              <a className="header__link" href="/contact">CONTACT</a>
            </div>
            <div className="header__nav-item">
              <a className="header__link" href="/contact">YOUR ACCOUNT</a>
            </div>
          </nav>
          <div className="header__hamburger" onClick={toggleDropdown}>
            <div className="header__hamburger-line"></div>
            <div className="header__hamburger-line"></div>
            <div className="header__hamburger-line"></div>
          </div>
        </div>
      </div>
      <div className={`header__drowdown ${dropdownActive ? 'is-active' : ''}`}>
        <div className="header__dropdown-content">
          <a className="header__dropdown-link" href="/">HOME</a>
          <a className="header__dropdown-link" href="/shop">SHOP</a>
          <a className="header__dropdown-link" href="/shop">ABOUT US</a>
          <a className="header__dropdown-link" href="/contact">CONTACT</a>
          <a className="header__dropdown-link" href="/contact">YOUR ACCOUNT</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
