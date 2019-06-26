import React from 'react'

const partners = [
  {
    image: '/img/partner-logos-vas.svg',
    url: 'https://web.vas.com',
  },
  {
    image: '/img/partner-logos-lely.svg',
    url: 'https://lely.com',
  },
  {
    image: '/img/partner-logos-landolakes.svg',
    url: 'https://www.landolakes.com',
  },
  {
    image: '/img/partner-logos-nestle.svg',
    url: 'https://www.nestle.com',
  },
  {
    image: '/img/partner-logos-allflex.svg',
    url: 'http://www.allflexusa.com',
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='highlight highlight-blue' />

      <div className='container'>
        <div className='footer-content'>

          <div className='footer-partners'>

            <div className='partner-logo partner-vas'>
              <a href='https://web.vas.com'><img src={require('../../assets/img/partner-logos-vas.svg')} alt='partner-logos-vas' /></a>
            </div>
            <div className='partner-logo'>
              <a href='https://lely.com'><img src={require('../../assets/img/partner-logos-lely.svg')} alt='partner-logos-lely' /></a>
            </div>
            <div className='partner-logo'>
              <a href='https://www.landolakes.com'><img src={require('../../assets/img/partner-logos-landolakes.svg')} alt='partner-logos-landolakes' /></a>
            </div>
            <div className='partner-logo'>
              <a href='https://www.nestle.com'><img src={require('../../assets/img/partner-logos-nestle.svg')} alt='partner-logos-nestle' /></a>
            </div>
            <div className='partner-logo'>
              <a href='http://www.allflexusa.com/'><img src={require('../../assets/img/partner-logos-allflex.svg')} alt='partner-logos-allflex' /></a>
            </div>
          </div>
          <div className='footer-contact rounded-bottomright'>

            <div className='footer-logo'>
              <div className='logo'>
                <img src={require('../../assets/img/vyla-logo.svg')} />
              </div>
            </div>

            <div className='footer-contact-container'>
              <div className='footer-contact-details'>
                <div className='footer-title'><h3>Get in touch</h3></div>
                <div className='footer-links'>
                  <ul>
                    <li><a href='mailto:info@vyla.com'>info@vyla.com</a></li>
                  </ul>
                </div>
              </div>
              <div className='footer-contact-socials'>
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
                <div className='footer-button'>
                  <a href='https://mdst.typeform.com/to/VTG8Y7' className='button button-lightblue'>Join Us<span className='arrow' /></a>
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
