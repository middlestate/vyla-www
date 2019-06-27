import React from 'react'
import PropTypes from 'prop-types'
import VylaButton from '../VylaButton'

const WhatWeDo = props => {
  let { image, alt, tagline, heading, content } = props.what_we_do
  return (
    <section className='whatwedo'>
      <div className='container'>
        <div className='image-block-fixed rounded-all'>
          <img src={image} alt={alt} />
        </div>
        <div className='text-block white-bg'>
          <p className='tagline'>{tagline}</p>
          <h2>{heading}</h2>
          <div className='text-content' />
          {content.map((paragraph, i) => <p key={i}>{paragraph.text}</p>)}
        </div>
        <div className='button-c2a'>
          <VylaButton
            classes='button button-green'
            url='/thefarm'
            text='The Farm'
          />
        </div>
      </div>
    </section>
  )
}

WhatWeDo.propTypes = {
  what_we_do: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
    tagline: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.array,
  }),
}
export default WhatWeDo
