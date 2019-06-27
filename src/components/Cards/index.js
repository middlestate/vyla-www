import React from 'react'

const Card = props => {
  let { image, heading, list } = props.card
  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='card-header'>
          <div className='card-icon'>
            <img src={image} alt={image} />
          </div>
          <div className='card-title'>
            <h3>{heading}</h3>
          </div>
          </div>
          <div className='card-list'>
            <ul>
              {list.map((item, i) => <li key={i}>{item.list_item}</li>)}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Card
