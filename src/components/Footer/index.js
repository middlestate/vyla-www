import React from 'react'

const Footer = ({ Partners }) => {
  const { partners } = Partners()
  return (
    <footer className="footer">
      <div className="highlight highlight-blue" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-partners">
            {partners.map(({ image, link }) => (
              <div key={link} className="partner-logo">
                <a href={link}>
                  <img src={image} alt={link} />
                </a>
              </div>
            ))}
          </div>
          <div className="footer-contact rounded-bottomright">
            <div className="footer-logo">
              <div className="logo">
                <img src={require('../../assets/img/vyla-logo.svg')} />
              </div>
            </div>
            <div className="footer-contact-container">
              <div className="footer-contact-details">
                <div className="footer-title">
                  <h3>Get in touch</h3>
                </div>
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="mailto:info@vyla.org">info@vyla.org</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-contact-socials">
                {/* <div className='footer-title'><h3>Follow Us</h3></div>
                <div className='footer-links'>
                  <ul>
                    <li><a href='https://wwww.twitter.com'>Twitter</a></li>
                    <li><a href='https://wwww.facebook.com'>Facebook</a></li>
                  </ul>
                </div>
                <div className='footer-button'>
                  <a href='https://mdst.typeform.com/to/VTG8Y7' className='button button-lightblue'>Join Us Now!<span className='arrow' /></a>
                </div> */}
                <div className="footer-button">
                  <a href="https://mdst.typeform.com/to/VTG8Y7" className="button button-lightblue">
                    Join Us
                    <span className="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
