import React, { Component, Fragment } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Helmet from 'react-helmet';
import '../../assets/sass/styles.scss';
import config from '../../../config';
import NavBar from '../NavBar';
import Footer from '../Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className="main">
          <header>
            <div className="container header-top">
              <NavBar
                isActive={this.state.isActive}
                toggleNavbar={() => this.toggleNavbar()}
              />
            </div>
          </header>
        </div>
        <ParallaxProvider>
          <Fragment>{this.props.children}</Fragment>
        </ParallaxProvider>
          <Footer />
      </Fragment>
    );
  }
}

export default Layout;
