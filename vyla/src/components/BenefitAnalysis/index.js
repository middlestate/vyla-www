import React from 'react'
import PropTypes from 'prop-types'

const BenefitAnalysis = ({ title, heading, cards }) => (
  <section className='benefits parallax-section'>
    <div className='particle-bg' />
    <div className='container'>
      <div className='title-block'>
        <p className='tagline'>{title}</p>
        <h2>{heading}</h2>
      </div>
      <div className='benefit-cards'>
        {cards.map((card, i) => (
          <div
            key={i}
            className={`card-container ${i === 0 ? 'card-active' : ''}`}>
            <div className='card-content'>
              <div className='card-title'>
                <h3>
                  {i + 1}. {card.card.heading}
                </h3>
              </div>
              <div className='card-text'>
                <p>{card.card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

BenefitAnalysis.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  cards: PropTypes.arrayOf({
    card: PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      content: PropTypes.string,
    }),
  }),
}

export default BenefitAnalysis
