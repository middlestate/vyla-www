import React from 'react';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: '.particle-bg',
    end: 3500,
    properties: [
      {
        startValue: 250,
        endValue: -20,
        property: 'translateY',
      },
    ],
  },
];

const Investors = ({ investors }) => (
  <section className='investors'>
    <Plx className='particle-bg' parallaxData={parallaxData}>
      <div></div>
    </Plx>
    <div className='container'>
      <div className='title-block'>
        <p className='tagline'>THE INVESTORS</p>
        <h2>Meet the Investors</h2>
      </div>
      <div className='investors-cards'>
        {investors.map((investor) => (
          <div key={investor.logo} className='card-container'>
            <div className='card-content'>
              <div className='header'>
                <div className='card-icon'>
                  <img src={investor.logo} alt={investor.logo} />
                </div>
                <div className='card-title'>
                  <h3>&nbsp;</h3>
                </div>
                <div className='card-list'>
                  <p>{investor.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Investors;
