import React from 'react';
import PropTypes from 'prop-types';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: '.particle-bg',
    end: 4500,
    properties: [
      {
        startValue: 70,
        endValue: -150,
        property: 'translateY',
      },
    ],
  },
];

const Team = ({ cards }) => (
  <section className='team'>
    <Plx className='particle-bg' parallaxData={parallaxData}>
      <div></div>
    </Plx>

    <div className='container'>
      <div className='title-block'>
        <p className='tagline'>THE TEAM</p>
        <h2>Meet the Leaders</h2>
      </div>
      <div className='leader-cards-grid'>
        {/* <div className='founder-card-container'> */}
        {/* <div className="green-vertical-particle-bg"></div> */}
        {cards.map(({ name, title, image, blurb }) => (
          <div key={name} className='leader-card'>
            <div className='card-content'>
              <div className='card-header founder-card-header'>
                <div className='card-icon founder-card-icon'>
                  <figure>
                    <img src={image} alt={name} />
                  </figure>
                </div>
                <div className='card-title'>
                  <h1
                    className='founder-name'
                    style={{
                      fontWeight: 300,
                      textAlign: 'center',
                    }}>
                    {name}
                  </h1>
                  <h2
                    className='founder-title'
                    style={{
                      textAlign: 'center',
                      fontSize: '2em',
                      fontWeight: 300,
                      transform: 'translate(0,-20px)',
                    }}>
                    {title}
                  </h2>
                </div>
              </div>
              <div className='card-list'>
                {blurb.map(({ text }, i) => (
                  <p key={i} style={{ padding: 10 }}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  </section>
);

Team.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      blurb: PropTypes.array,
    })
  ),
};

export default Team;
