import React from 'react'
import PropTypes from 'prop-types'

const Story = ({
  image,
  title,
  heading,
  content
}) => (
    <section className="whatwedo parallax-section">
	    <div className="container">
		    <div className="particle-bg"></div>
		    <div className="image-block rounded-bottomright">
          <img src={image} alt="hero-image-brainstorm" />
		    </div>
		    <div class="text-block white-bg">
			  <p class="tagline">{title}</p>
			  <h2>{heading}</h2>
          <div class="text-content">
            {content.map((data, i) => (
              <p key={i}>{data.text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

Story.PropTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
}

export default Story