import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import VylaButton from '../VylaButton'
// import {ReactComponent as Icon} from '../../assets/img/vyla-logo.svg'
import Logo from '../../assets/img/vyla-logo.svg'

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
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src={Logo} />
          </Link>
          <div className='navbar-item is-hidden-desktop' style={{marginLeft: 'auto'}}>
            <VylaButton
              url='https://mdst.typeform.com/to/VTG8Y7'
              classes='button buttonV button-small button-blue has-text-white'
              text='Join Us'
            />
          </div>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          id='navMenu'>
          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item' to='/about'>
              ABOUT
            </Link>
            <Link className='navbar-item' to='/thefarm'>
              THE FARM
            </Link>
            <div className='navbar-item'>
              <Link to='/contact'>CONTACT</Link>
            </div>
            <div className='navbar-item is-hidden-mobile'>
              <VylaButton
                url='https://mdst.typeform.com/to/VTG8Y7'
                classes='button buttonV button-small button-blue has-text-white'
                text='Join Us'
              />
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
