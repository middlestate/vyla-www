import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Cards from '../Cards'

const Mission = ({
  title,
  heading,
  quote,
  cite_logo,
  cite_name,
  cite_text,
  cards,
}) => (
    <Fragment>
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
    <section className='quote section-divider'>
      <div className='container'>
        <div className='quote-block'>
          <div className='quote-text'>{quote}</div>
          <div className='quote-autor'>
            <div className='quote-author-logo'>
              <img src={cite_logo} alt={cite_logo} />
            </div>
            <div className='quote-author-name'>
              <p>
                <strong>{cite_name}</strong><br />{cite_text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

Mission.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  quote: PropTypes.string,
  cite_logo: PropTypes.string,
  cite_name: PropTypes.string,
  cite_text: PropTypes.string,
  cards: PropTypes.array
}

export default Mission
/*
.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    list: PropTypes.objectOf({
      list_item: PropTypes.string,
    }),
    */