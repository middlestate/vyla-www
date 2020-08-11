import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import '../../assets/sass/styles.scss';
import config from '../../../config';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Partners = () => {
  const data = useStaticQuery(
    graphql`
      query PartnerData {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              footer: { partners: { elemMatch: { image: { ne: null } } } }
            }
          }
        ) {
          nodes {
            frontmatter {
              footer {
                partners {
                  image
                  link
                }
              }
            }
          }
        }
      }
    `
  );
  return data.allMarkdownRemark.nodes[0].frontmatter.footer;
};

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
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        <div className={`main ${this.state.isActive ? 'is-showNav' : ''}`}>
          <NavBar
            isActive={this.state.isActive}
            toggleNavbar={() => this.toggleNavbar()}
          />
        </div>
        <Fragment>{this.props.children}</Fragment>
        <Footer Partners={Partners} />
      </Fragment>
    );
  }
}

export default Layout;
