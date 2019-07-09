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
      <Fragment>
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
            <div className="mobile-button">
              <button
                className={`menuButton ${isActive ? 'is-showNav' : ''}`}
                data-target="navMenu"
                onClick={toggleNavbar}>
                <div className="icon">
                  <div className="bar bar1" />
                  <div className="bar bar2" />
                </div>
              </button>
            </div>
          </div>
          <div className={`navigation-mobile ${isActive ? 'is-showNav' : ''} `}>
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
        </div>
      </Fragment>
    )}
  />
);

export default NavBar;

// <nav className='navbar is-fixed-top' aria-label='main navigation'>
//   <div className='navbar-brand'>
//     <Link to='/' className='navbar-item'>
//       <img src={Logo} />
//     </Link>
//     <div className='navbar-item is-hidden-desktop' style={{marginLeft: 'auto'}}>
//       <VylaButton
//         url='https://mdst.typeform.com/to/VTG8Y7'
//         classes='button buttonV button-small button-blue has-text-white'
//         text='Join Us'
//       />
//     </div>
//     <button
//       className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
//       data-target='navMenu'
//       onClick={toggleNavbar}>
//       <span />
//       <span />
//       <span />
//     </button>
//   </div>
//   <div
//     className={`navbar-menu ${isActive ? 'is-active' : ''}`}
//     id='navMenu'>
//   </div>
// </nav>
