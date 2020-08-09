import React from 'react';
import PropTypes from 'prop-types';
import AboutPageTemplate from '../../components/AboutPageTemplate';

const AboutPagePreview = ({ entry, getAsset }) => {
  const entryHeroContent = entry.getIn(['data', 'hero', 'content']);
  const heroContent = entryHeroContent ? entryHeroContent.toJS() : [];

  const entryStoryContent = entry.getIn(['data', 'story', 'content']);
  const storyContent = entryStoryContent ? entryStoryContent.toJS() : [];

  const entryMissionCards = entry.getIn(['data', 'mission', 'cards']);
  const missionCards = entryMissionCards ? entryMissionCards.toJS() : [];

  const entryContent = entry.getIn(['data', 'team', 'founders', 'content']);
  const content = entryContent ? entryContent.toJS() : [];

  const entryInvestors = entry.getIn(['data', 'investors']);
  const investorContent = entryInvestors ? entryInvestors.toJS() : [];

  return (
    <AboutPageTemplate
      hero={{
        image: entry.getIn(['data', 'hero', 'image']),
        background_color: entry.getIn(['data', 'hero', 'background_color']),
        heading: entry.getIn(['data', 'hero', 'heading']),
        description: entry.getIn(['data', 'hero', 'description']),
        content: heroContent,
        button: {
          classes: entry.getIn(['data', 'hero', 'button', 'classes']),
          text: entry.getIn(['data', 'hero', 'button', 'text']),
          link: entry.getIn(['data', 'hero', 'button', 'link']),
        },
      }}
      story={{
        image: entry.getIn(['data', 'story', 'image']),
        title: entry.getIn(['data', 'story', 'title']),
        heading: entry.getIn(['data', 'story', 'heading']),
        content: storyContent,
      }}
      investors={{
        investors: investorContent,
      }}
      mission={{
        title: entry.getIn(['data', 'mission', 'title']),
        heading: entry.getIn(['data', 'mission', 'heading']),
        quote: entry.getIn(['data', 'mission', 'quote']),
        cite_logo: entry.getIn(['data', 'mission', 'cite_logo']),
        cite_name: entry.getIn(['data', 'mission', 'cite_name']),
        cite_text: entry.getIn(['data', 'mission', 'cite_text']),
        cards: { missionCards },
      }}
      team={{
        content: content,
        name: entry.getIn(['data', 'team', 'founders', 'name']),
        image: entry.getIn(['data', 'team', 'founders', 'image']),
        title: entry.getIn(['data', 'team', 'founders', 'title']),
      }}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
