import React from 'react';
import PropTypes from 'prop-types';
import VylaButton from '../VylaButton';
import Plx from 'react-plx';
import Image from '../Image';

const Content = props => (
  <div className="text-content">
    {props.text.map((text, i) => (
      <p key={i}>{text.text}</p>
    ))}
  </div>
);

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: 'translateY'
      }
    ]
  }
];

const Hero = ({ image, background_color, heading, description, content }) => (
  <section className="hero">
    <div className="highlight" style={{ backgroundColor: background_color }} />
    <div className="container">
      <Plx
        className="image-block rounded-bottomright"
        parallaxData={parallaxData}>
        <img src={image} />
      </Plx>
      {/* <div className="image-block rounded-bottomright">
        <img src={image} />
      </div> */}
      <div className="text-block rounded-topleft white-bg">
        <h1>{heading}</h1>
        <p className="intro">{description}</p>
        {content ? <Content text={content} /> : ''}
        <div className="button-c2a">
          <VylaButton
            url="https://mdst.typeform.com/to/VTG8Y7"
            classes="button button-blue"
            text="Join Us"
          />
        </div>
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  image: PropTypes.string,
  background_color: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default Hero;
