import React from 'react'
import PropTypes from 'prop-types'
import Plx from 'react-plx'

const parallaxData = [
  {
    start: '.particle-bg',
    end: 2000,
    properties: [
      {
        startValue: 150,
        endValue: -20,
        property: 'translateY',
      },
    ],
  },
]

const Team = ({ founders }) => (
  <section className="team">
    <Plx className="particle-bg" parallaxData={parallaxData}>
      <div></div>
    </Plx>
    <div className="container">
      <div className="title-block">
        <p className="tagline">THE TEAM</p>
        <h2>Meet the Founders</h2>
      </div>
      <div className="mission-cards">
        {founders.map(({ name, title, image, content }) => (
          <div key={name} className="card-container" style={{ width: 472 }}>
            <div className="card-content">
              <div className="card-header">
                <div
                  className="card-icon"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '22em',
                    marginBottom: 20,
                  }}>
                  <figure>
                    <img src={image} alt={name} />
                  </figure>
                </div>
                <div className="card-title">
                  <h1 style={{ fontWeight: 300 }}>{name}</h1>
                  <h2
                    style={{ textAlign: 'center', fontSize: '2em', fontWeight: 300, transform: 'translate(0,-20px)' }}>
                    {title}
                  </h2>
                </div>
              </div>
              <div className="card-list">
                {content.map(({ text }) => (
                  <p>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

Team.propTypes = {
  team: PropTypes.shape({
    founders: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        content: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
          })
        ),
      })
    ),
  }),
}

export default Team
