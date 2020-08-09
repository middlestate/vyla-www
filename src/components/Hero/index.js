import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import VylaButton from '../VylaButton';
import Plx from 'react-plx';

const Content = props => (
  <div className="text-content">
    {props.text.map((text, i) => (
      <p key={i}>{text.text}</p>
    ))}
  </div>
);

const Email = props => (
  <Fragment>
    <div className="footer-links">
      <ul>
        <li>{props.heading}</li>
      </ul>
      </div>
    <p>{props.mail}</p>
  </Fragment>
);

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: -100,
        property: 'translateY'
      }
    ]
  }
];

const Hero = ({
  image,
  background_color,
  heading,
  description,
  button,
  content,
  email
}) => (
  <section className="hero">
    <div className="highlight" style={{ backgroundColor: background_color }} />
    <div className="container">
      <Plx
        className="image-block rounded-bottomright image-reset"
        parallaxData={parallaxData}>
        <img src={image} />
      </Plx>
      <div className="text-block rounded-topleft white-bg">
        <h1>{heading}</h1>
        <p className="intro">{description}</p>
        {content ? <Content text={content} /> : ''}
        {email ? <Email heading={email.heading} mail={email.mail} /> : ''}
        <div className="button-c2a">
          <VylaButton
            url={button.link}
            classes={button.classes}
            text={button.text}
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
  ),
  button: PropTypes.shape({
    classes: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string
  }),
  email: PropTypes.shape({
    heading: PropTypes.string,
    mail: PropTypes.string
  })
};

export default Hero;
