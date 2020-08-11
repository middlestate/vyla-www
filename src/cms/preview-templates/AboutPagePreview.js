import React from 'react';
import PropTypes from 'prop-types';
import AboutPageTemplate from '../../components/AboutPageTemplate';

const AboutPagePreview = ({ entry, getAsset }) => {
  const entryHeroContent = entry.getIn(['data', 'hero', 'content']);
  const heroContent = entryHeroContent ? entryHeroContent.toJS() : [];

  const entryStoryContent = entry.getIn(['data', 'story', 'content']);
  const content = entryStoryContent ? entryStoryContent.toJS() : [];

  const entryMissionCards = entry.getIn(['data', 'mission', 'cards']);
  const missionCards = entryMissionCards ? entryMissionCards.toJS() : [];

  const entryTeamCards = entry.getIn(['data', 'team', 'cards']);
  const teamCards = entryTeamCards ? entryTeamCards.toJS() : [];

  const entryInvestorCards = entry.getIn(['data', 'investors', 'cards']);
  const investorCards = entryInvestorCards ? entryInvestorCards.toJS() : [];

  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
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
        content: content,
      }}
      investors={{
        cards: investorCards,
      }}
      mission={{
        title: entry.getIn(['data', 'mission', 'title']),
        heading: entry.getIn(['data', 'mission', 'heading']),
        cards: missionCards,
      }}
      team={{
        cards: teamCards,
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
