import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import WhatWeDo from '../WhatWeDo';
import Mission from '../Mission';
import BenefitAnalysis from '../BenefitAnalysis';
import Quote from '../Quote';

const HomePageTemplate = ({
  title,
  meta_title,
  meta_description,
  hero,
  what_we_do,
  mission,
  quote,
  benefit_analysis
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <Hero
      image={hero.image}
      background_color={hero.background_color}
      heading={hero.heading}
      description={hero.description}
    />
    <WhatWeDo
      image={what_we_do.image}
      alt={what_we_do.alt}
      tagline={what_we_do.tagline}
      heading={what_we_do.heading}
      content={what_we_do.content}
    />
    <Mission
      title={mission.title}
      heading={mission.heading}
      cards={mission.cards}
    />
    <Quote
      quote={quote.quote}
      cite_logo={quote.cite_logo}
      cite_name={quote.cite_name}
      cite_text={quote.cite_text}
    />
    <BenefitAnalysis
      title={benefit_analysis.title}
      heading={benefit_analysis.heading}
      cards={benefit_analysis.cards}
    />
  </div>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  hero: PropTypes.shape({
    image: PropTypes.string,
    background_color: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string
  }),
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
    cards: PropTypes.array
  }),
  quote: PropTypes.shape({
    quote: PropTypes.string,
    cite_logo: PropTypes.string,
    cite_name: PropTypes.string,
    cite_text: PropTypes.string
  }),
  benefit_analysis: PropTypes.shape({
    title: PropTypes.string,
    heading: PropTypes.string,
    cards: PropTypes.array
  })
};

export default HomePageTemplate;
