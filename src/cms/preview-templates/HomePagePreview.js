import React from 'react';
import PropTypes from 'prop-types';
import HomePageTemplate from '../../components/HomePageTemplate';

const HomePagePreview = ({ entry, getAsset }) => {
  const entryWhatWeDoContent = entry.getIn(['data', 'what_we_do', 'content']);
  const what_we_do_content = entryWhatWeDoContent
    ? entryWhatWeDoContent.toJS()
    : [];

  const entryMissionCards = entry.getIn(['data', 'mission', 'cards']);
  const missionCards = entryMissionCards ? entryMissionCards.toJS() : [];

  const entryBenefitAnalysisCards = entry.getIn(['data', 'benefit_analysis', 'cards']);
  const benefitAnalysisCards = entryBenefitAnalysisCards
    ? entryBenefitAnalysisCards.toJS()
    : [];

  return (
    <HomePageTemplate
      title={entry.getIn(['data','title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      hero={{
        image: entry.getIn(['data', 'hero', 'image']),
        heading: entry.getIn(['data', 'hero', 'heading']),
        description: entry.getIn(['data', 'hero', 'description'])
      }}
      what_we_do={{
        image: entry.getIn(['data', 'what_we_do', 'image']),
        alt: entry.getIn(['data', 'what_we_do', 'alt']),
        tagline: entry.getIn(['data', 'what_we_do', 'tagline']),
        heading: entry.getIn(['data', 'what_we_do', 'heading']),
        content: what_we_do_content
      }}
      mission={{
        title: entry.getIn(['data', 'mission', 'title']),
        heading: entry.getIn(['data', 'mission', 'heading']),
        quote: entry.getIn(['data', 'mission', 'quote']),
        cite_logo: entry.getIn(['data', 'mission', 'cite_logo']),
        cite_name: entry.getIn(['data', 'mission', 'cite_name']),
        cite_text: entry.getIn(['data', 'mission', 'cite_text']),
        cards: missionCards
      }}
      benefit_analysis={{
        title: entry.getIn(['data', 'benefit_analysis', 'title']),
        heading: entry.getIn(['data', 'benefit_analysis', 'heading']),
        cards: benefitAnalysisCards
      }}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default HomePagePreview;
