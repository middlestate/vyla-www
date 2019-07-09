import React from 'react';
import PropTypes from 'prop-types';
import FarmPageTemplate from '../../components/FarmPageTemplate';

const FarmPagePreview = ({ entry, getAsset }) => {
  // const entryHeroContent = entry.getIn(['data', 'hero', 'content']);
  // const heroContent = entryHeroContent ? entryHeroContent.toJS() : [];

  const entryStoryContent = entry.getIn(['data', 'story', 'content']);
  const storyContent = entryStoryContent ? entryStoryContent.toJS() : [];

  const entryBenefitAnalysisCards = entry.getIn([
    'data',
    'benefit_analysis',
    'cards'
  ]);
  const benefitAnalysisCards = entryBenefitAnalysisCards
    ? entryBenefitAnalysisCards.toJS()
    : [];

  return (
    <FarmPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      hero={{
        image: entry.getIn(['data', 'hero', 'image']),
        background_color: entry.getIn(['data', 'hero', 'background_color']),
        heading: entry.getIn(['data', 'hero', 'heading']),
        description: entry.getIn(['data', 'hero', 'description']),
        button: entry.getIn(['data', 'hero', 'button'])
      }}
      story={{
        image: entry.getIn(['data', 'story', 'image']),
        title: entry.getIn(['data', 'story', 'title']),
        heading: entry.getIn(['data', 'story', 'heading']),
        content: storyContent
      }}
      benefit_analysis={{
        title: entry.getIn(['data', 'benefit_analysis', 'title']),
        heading: entry.getIn(['data', 'benefit_analysis', 'heading']),
        cards: benefitAnalysisCards
      }}
    />
  );
};

FarmPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default FarmPagePreview;
