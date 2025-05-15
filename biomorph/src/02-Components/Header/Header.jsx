import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive((prev) => !prev);
  };

  const toggleCart = () => {
    setCartActive((prev) => !prev);
  };

  const cart = [
    {
      name: "Cat",
      price: "10$",
      image: "",
    },
    {
      name: "Dog",
      price: "20$",
      image: "",
    },
    {
      name: "Rabbit",
      price: "30$",
      image: "",
    },
    {
      name: "Cat",
      price: "10$",
      image: "",
    },
    {
      name: "Dog",
      price: "20$",
      image: "",
    },
    {
      name: "Rabbit",
      price: "30$",
      image: "",
    },
    {
      name: "Cat",
      price: "10$",
      image: "",
    },
    {
      name: "Dog",
      price: "20$",
      image: "",
    },
    {
      name: "Rabbit",
      price: "30$",
      image: "",
    },
  ];

  return (
    <>
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
                <a className="header__link" href="/account">
                  YOUR ACCOUNT
                </a>
              </div>
              <div className="header__nav-item">
                <a className="header__link" href="/cart">
                  CART
                </a>
              </div>
            </nav>
            <div className="header__hamburger" onClick={toggleDropdown}>
              <div className="header__hamburger-line"></div>
              <div className="header__hamburger-line"></div>
              <div className="header__hamburger-line"></div>
            </div>
          </div>
        </div>
        <div
          className={`header__drowdown ${dropdownActive ? "is-active" : ""}`}
        >
          <div className="header__dropdown-content">
            <a className="header__dropdown-link" href="/">
              HOME
            </a>
            <a className="header__dropdown-link" href="/shop">
              SHOP
            </a>
            <a className="header__dropdown-link" href="/aboutus">
              ABOUT US
            </a>
            <a className="header__dropdown-link" href="/contact">
              CONTACT
            </a>
            <a className="header__dropdown-link" href="/account">
              YOUR ACCOUNT
            </a>
          </div>
        </div>
      </header>
      <div className={`header__cart ${cartActive ? "is-active" : ""}`}>
        <div className="header__cart-info">
          <h1 className="header__cart-title">Cart</h1>
          <a className="header__cart-checkout" href="/">
            Checkout
          </a>
        </div>
        <div className="header__wrapper-cart">
          {cart.map((item, index) => (
            <div className="header__cart-item" key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
