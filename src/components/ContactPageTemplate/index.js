import React from 'react'
import PropTypes from 'prop-types'
import VylaButton from '../VylaButton';

const ContactPageTemplate = ({
  image,
  background_color,
  title,
  subtitle,
  description,
  email
}) => (
  <section className="hero">
      <div className="highlight" style={{backgroundColor: background_color}}/>
    <div className="container">
      {/* <Parallax
        className='image-block rounded-bottomright'
        y={[80, -80]} tagInner='figure' tagOuter='figure'
      > */}
      <div className="image-block rounded-bottomright">
        <img src={image} alt="hero" />
      </div>
      {/* </Parallax> */}
      <div className="text-block rounded-topleft white-bg">
        <h1>{title}</h1>
        <p className="intro">{subtitle}</p>
        <p>{description}</p>
        <div class="footer-links">
          <ul>
            <li>Contact us directly</li>
          </ul>
        </div>
        <p>{email}</p>
        <div className="button-c2a">
          <VylaButton
            url="https://mdst.typeform.com/to/Z3VR9R"
            classes="button button-blue"
            text="Contact Us"
          />
        </div>
      </div>
    </div>
  </section>
);

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  background_color: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string
}

export default ContactPageTemplate
