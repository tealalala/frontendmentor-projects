import React from 'react';
import '../index.css';
import LogoBlack from '../images/logo-black.svg';
import LogoWhite from '../images/logo-white.svg';

const NavBar = () => {
    return (
      <div className="item item-1">
        <nav className="nav-items">
          <div className="logo nav-item">
            <img src={ LogoBlack } className="logo-black" alt={"LogoBlack"}/>
            <img src={ LogoWhite } className="logo-white" alt={"LogoWhite"}/>
          </div>
          <div className="nav-links nav-item">
            <ul className="nav-link-items">
              <li className="nav-link-item">
                <a href="https://twitter.com/" aria-label="Follow us on Twitter">
                  <i className="fab fa-twitter fa-lg"></i>
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li className="nav-link-item" aria-label="Follow us on Facebook">
                <a href="https://facebook.com">
                  <i className="fab fa-facebook-f fa-lg"></i>
                  <i className="fab fa-facebook-f fa-2x"></i>
                </a>
              </li>
              <li className="nav-link-item">
                <a href="https://github.com" aria-label="Follow us on GitHub">
                  <i className="fab fa-github fa-lg"></i>
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
};

export default NavBar;
