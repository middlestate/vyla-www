import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, cite_logo, cite_name, cite_text }) => (
  <section className="quote section-divider">
    <div className="container">
      <div className="quote-block">
        <div className="quote-text">{quote}</div>
        <div className="quote-autor">
          <div className="quote-author-logo">
            <img src={cite_logo} alt={cite_logo} />
          </div>
          <div className="quote-author-name">
            <p>
              <strong>{cite_name}</strong>
              <br />
              {cite_text}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Quote.propTypes = {
  quote: PropTypes.string,
  cite_logo: PropTypes.string,
  cite_name: PropTypes.string,
  cite_text: PropTypes.string
};

export default Quote