import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="container-fluid py-3">
      <div className="row header">
        <div className="header__row col-12 col-lg-12">
          <h1 className="header__title">BIOMORPH</h1>
          <nav>
            <div className="header__nav-item">
              <a className="header__link" href="/">
                HOME
              </a>
            </div>
            <div className="header__nav-item">
              <a className="header__link" href="/shop">
                SHOP
              </a>
            </div>
            <div className="header__nav-item">
              <a className="header__link" href="/aboutus">
                ABOUT US
              </a>
            </div>
            <div className="header__nav-item">
              <a className="header__link" href="/contact">
                CONTACT
              </a>
            </div>
            <div className="header__nav-item">
              <a className="header__link" href="/contact">
                YOUR ACCOUNT
              </a>
            </div>
          </nav>
          <div className="header__hamburger">
            <div className="header__hamburger-line"></div>
            <div className="header__hamburger-line"></div>
            <div className="header__hamburger-line"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
