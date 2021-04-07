import React, { Fragment } from 'react';
import Logo from '../../assets/img/vyla-logo.svg';
import {Link} from 'gatsby';

const Footer = ({ Partners }) => {
  const { partners } = Partners();
  return (
    <Fragment>
      <div className='footer-container'>
        <div className='footer-partners'>
          {partners.map(({ image, link }) => (
            <div key={link} className='partner-logo'>
              <a href={link}>
                <img src={image} alt={link} />
              </a>
            </div>
          ))}
        </div>
        <div className='footer-content'>
          <div className='footer-contact rounded-bottomright'>
            <div className='footer-logo'>
              <div className='logo'>
                <img src={Logo} />
              </div>
            </div>

            <div className='footer-contact-container'>
              <div className='footer-contact-details'>
                <div className='footer-title'>
                  <h3>Get in touch</h3>
                </div>
                <div className='footer-links'>
                  <ul>
                    <li>
                      <a href='mailto:jackie.valenzuela@vyla.com'>jackie.valenzuela@vyla.com</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='footer-button'>
                <a
                  href='https://mdst.typeform.com/to/VTG8Y7'
                  className='button button-lightblue'>
                  Join Us
                  <span className='arrow' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='highlight highlight-blue'>
          <div className='footer-legal'>
            <ul>
              <li><Link to="/eusa">EUSA</Link></li>
              <li><Link to="/terms" className='has-text-white'>TERMS</Link></li>
              <li><Link to="/privacy">PRIVACY</Link></li>
              <li><Link to="/spa">SUBSCRIPTION PACKAGE AGREEMENT</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
