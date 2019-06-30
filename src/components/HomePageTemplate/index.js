import React from 'react';
import Helmet from 'react-helmet';
// import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'
// import { ParallaxProvider } from 'react-scroll-parallax'
import PropTypes from 'prop-types';
import Hero from '../Hero';
import WhatWeDo from '../WhatWeDo';
import Mission from '../Mission';
import BenefitAnalysis from '../BenefitAnalysis';

const HomePageTemplate = ({
  heading,
  description,
  image,
  meta_title,
  meta_description,
  what_we_do,
  mission,
  benefit_analysis
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <Hero image={image} heading={heading} description={description} />
    <WhatWeDo what_we_do={what_we_do} />
    <Mission
      title={mission.title}
      heading={mission.heading}
      cite_name={mission.cite_name}
      cite_image={mission.cite_image}
      cite_text={mission.cite_text}
      cite_logo={mission.cite_logo}
      quote={mission.quote}
      cards={mission.cards}
    />
    <BenefitAnalysis
      title={benefit_analysis.title}
      heading={benefit_analysis.heading}
      cards={benefit_analysis.cards}
    />
  </div>
);

HomePageTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  what_we_do: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
    tagline: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.array
  }),
  mission: PropTypes.shape({
    title: PropTypes.string,
    heading: PropTypes.string,
    cite_name: PropTypes.string,
    cite_image: PropTypes.string,
    cite_text: PropTypes.string,
    quote: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        heading: PropTypes.string,
        list: PropTypes.array
      })
    )
  }),
  benefit_analysis: PropTypes.shape({
    title: PropTypes.string,
    heading: PropTypes.string,
    cards: PropTypes.array,

  })
};

export default HomePageTemplate;
