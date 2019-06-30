import React from 'react'
import PropTypes from 'prop-types'
const Card = ({ card }) => {
  console.log(card)
  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='card-header'>
          <div className='card-icon'>
            <img src={card.image} alt={card.image} />
          </div>
          <div className='card-title'>
            <h3>{card.heading}</h3>
          </div>
          </div>
          <div className='card-list'>
            <ul>
              {card.list_items.map((item, i) => <li key={i}>{item.list_item}</li>)}
            </ul>
          </div>
        </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.string,
    list_items: PropTypes.array
  })

}

export default Card
