import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../Cards';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: '.particle-bg',
    end: 2000,
    properties: [
      {
        startValue: 150,
        endValue: -20,
        property: 'translateY'
      }
    ]
  }
];

const Mission = ({ title, heading, cards }) => (
  <section className="mission">
    <Plx className="particle-bg" parallaxData={parallaxData} >
      <div></div>
    </Plx>
    {/* <div className='particle-bg'></div> */}
    <div className="container">
      <div className="title-block">
        <p className="tagline">{title}</p>
        <h2>{heading}</h2>
      </div>
      <Cards data={cards} />
    </div>
  </section>
);

Mission.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  cards: PropTypes.array
};

export default Mission;
