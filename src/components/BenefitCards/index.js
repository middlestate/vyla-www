import React from 'react';
import PropTypes from 'prop-types';

const BenefitCards = ({ data }) => (
  <div className="benefit-cards">
    {data.map((card,i) => (
      <div key={card.heading} className={`card-container ${i === 0 ? 'card-active' : ''}`}>
        <div className="card-content">
          <div className="card-title">
            <h3>
              {i + 1}. {card.heading}
            </h3>
          </div>
          <div className="card-text">
            <p>{card.content}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

BenefitCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      content: PropTypes.string
    })
  )
};

export default BenefitCards;
