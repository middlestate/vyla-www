import React from 'react';
import PropTypes from 'prop-types';
import BenefitCards from '../BenefitCards';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: '.start-element',
    end: 3000,
    properties: [
      {
        startValue: 100,
        endValue: -50,
        property: 'translateY'
      }
    ]
  }
];

const BenefitAnalysis = ({ title, heading, cards }) => (
  <section className="benefits parallax-section">
    <Plx className="particle-bg" parallaxData={parallaxData}>
      <div />
    </Plx>
    <div className="container">
      <div className="title-block">
        <p className="tagline">{title}</p>
        <h2>{heading}</h2>
      </div>
      <div className='.start-element'/>
      <BenefitCards data={cards} />
    </div>
  </section>
);

BenefitAnalysis.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  cards: PropTypes.array
};

export default BenefitAnalysis;
