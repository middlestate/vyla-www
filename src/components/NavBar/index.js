import React, { Fragment } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
// import SearchBox from '../SearchBox'
import VylaButton from '../VylaButton';
import Logo from '../../assets/img/vyla-logo.svg';

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <header className={`${isActive ? 'is-showNav' : ''}`}>
        <div className={`container header-top `}>
          {/* <div className="container header-top"> */}
          <div className="header-left">
            <Link to="/" className="logo">
              <img src={Logo} />
            </Link>
          </div>
          <div className="header-right">
            <div className="navigation">
              <nav className="main">
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/thefarm">The Farm</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navigation-c2a">
              <VylaButton
                url="https://mdst.typeform.com/to/VTG8Y7"
                classes="button button-small button-blue"
                text="Join Us"
              />
            </div>
            <div className="mobile-button">
              <button
                className={`menuButton ${isActive ? 'js-toggleNav is-showNav' : ''}`}
                data-target="navMenu"
                onClick={toggleNavbar}>
                <div className="icon">
                  <div className="bar bar1" />
                  <div className="bar bar2" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="navigation-mobile">
          <div className="container">
            <nav className="mobile">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/thefarm">The Farm</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )}
  />
);

export default NavBar;
