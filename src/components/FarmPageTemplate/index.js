import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import WhatWeDo from '../WhatWeDo';
import BenefitAnalysis from '../BenefitAnalysis';

const FarmPageTemplate = ({
  title,
  meta_title,
  meta_description,
  hero,
  story,
  benefit_analysis
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <Hero
      background_color={hero.background_color}
      image={hero.image}
      heading={hero.heading}
      description={hero.description}
    />
    <WhatWeDo
      image={story.image}
      title={story.title}
      heading={story.heading}
      content={story.content}
    />
    <BenefitAnalysis
      title={benefit_analysis.title}
      heading={benefit_analysis.heading}
      cards={benefit_analysis.cards}
    />
  </div>
);

FarmPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  hero: PropTypes.shape({
    image: PropTypes.string,
    background_color: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  story: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.array
  }),
  benefit_analysis: PropTypes.shape({
    title: PropTypes.string,
    heading: PropTypes.string,
    cards: PropTypes.array
  })
};

export default FarmPageTemplate