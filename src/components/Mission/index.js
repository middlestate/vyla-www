import React from 'react'
import PropTypes from 'prop-types'
import Cards from '../Cards'

const Mission = ({
  title,
  heading,
  cards,
}) => (
    <section className='mission'>
      <div className='particle-bg' />
      <div className='container'>
        <div className='title-block'>
          <p className='tagline'>{title}</p>
          <h2>{heading}</h2>
        </div>
        <Cards data={cards} />
      </div>
    </section>
)

Mission.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  cards: PropTypes.array
}

export default Mission
