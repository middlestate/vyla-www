import React from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: '.particle-bg',
    end: 1500,
    properties: [
      {
        startValue: 70,
        endValue: -30,
        property: 'translateY'
      }
    ]
  }
];

const Story = ({ image, title, heading, content }) => (
  <section className="whatwedo parallax-section">
    <div className="container">
      <Plx className='particle-bg' parallaxData={parallaxData}>
        <div />
      </Plx>
      <div className="image-block rounded-bottomright">
        <img src={image} alt="hero-image-brainstorm" />
      </div>
      <div className="start-element text-block white-bg">
        <p className="tagline">{title}</p>
        <h2>{heading}</h2>
        <div className="text-content">
          {content.map((data, i) => (
            <p key={i}>{data.text}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Story.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default Story;
