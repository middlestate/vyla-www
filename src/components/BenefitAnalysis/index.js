import React from 'react'
import PropTypes from 'prop-types'
import BenefitCards from '../BenefitCards';

const BenefitAnalysis = ({ title, heading, cards }) => (
  <section className='benefits parallax-section'>
    <div className='particle-bg' />
    <div className='container'>
      <div className='title-block'>
        <p className='tagline'>{title}</p>
        <h2>{heading}</h2>
      </div>
      <BenefitCards data={cards} />
    </div>
  </section>
)

BenefitAnalysis.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  cards: PropTypes.array
}

export default BenefitAnalysis
