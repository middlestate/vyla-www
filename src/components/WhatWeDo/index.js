import React from 'react';
import PropTypes from 'prop-types';
import VylaButton from '../VylaButton';
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

const WhatWeDo = ({ image, alt, tagline, heading, content }) => {
  return (
    <section className="whatwedo">
      <div className="container">
        <Plx className='particle-bg' parallaxData={parallaxData}>
          <div/>
        </Plx>
        <div className="image-block-fixed rounded-all image-reset">
          <img src={image} alt={alt} />
        </div>
        <div className="text-block white-bg">
          <p className="tagline">{tagline}</p>
          <h2>{heading}</h2>
          <div className="text-content" />
          {content.map((paragraph, i) => (
            <p key={i}>{paragraph.text}</p>
          ))}
        </div>
        <div className="button-c2a">
          <VylaButton
            classes="button button-green"
            url="/thefarm"
            text="Learn more"
          />
        </div>
      </div>
    </section>
  );
};

WhatWeDo.propTypes = {
  what_we_do: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
    tagline: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.array
  })
};
export default WhatWeDo;
