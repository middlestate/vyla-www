import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ data }) => (
  <div className="mission-cards">
    {data.map(card => (
      <div key={card.heading} className="card-container">
        <div className="card-content">
          <div className="card-header">
            <div className="card-icon">
              <img src={card.image} alt={card.image} />
            </div>
            <div className="card-title">
              <h3>{card.heading}</h3>
            </div>
          </div>
          <div className="card-list">
            <ul>
              {card.list_items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);

Cards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      image: PropTypes.string,
      list_items: PropTypes.array
    })
  )
};

export default Cards;
