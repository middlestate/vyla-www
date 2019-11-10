import React, { Component, Fragment } from 'react'
// import { ParallaxProvider } from 'react-scroll-parallax';
import Helmet from 'react-helmet'
import '../../assets/sass/styles.scss'
// import '../../assets/sass/styles.sass'
import config from '../../../config'
import NavBar from '../NavBar'
import Footer from '../Footer'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className={`main ${this.state.isActive ? 'is-showNav' : ''}`}>
          <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
        </div>
        <Fragment>{this.props.children}</Fragment>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
