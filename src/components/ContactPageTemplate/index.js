import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import VylaButton from '../VylaButton';

const ContactPageTemplate = ({ title, meta_title, hero, email }) => (
  <Fragment>
    <Hero
      background_color={hero.background_color}
      heading={hero.heading}
      description={hero.description}
      content={hero.content}
      image={hero.image}
      button={hero.button}
    />
  </Fragment>
);

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  hero: PropTypes.shape({
    background_color: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.array,
    image: PropTypes.string,
    button: PropTypes.object
  }),
  email: PropTypes.shape({
    heading: PropTypes.string,
    mail: PropTypes.string
  })
};

export default ContactPageTemplate;
