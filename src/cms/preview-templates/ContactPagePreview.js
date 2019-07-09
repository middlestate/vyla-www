import React from 'react';
import PropTypes from 'prop-types';
import ContactPageTemplate from '../../components/ContactPageTemplate';

const ContactPagePreview = ({ entry, getAsset }) => {
  const entryHeroContent = entry.getIn(['data', 'hero', 'content']);
  const heroContent = entryHeroContent ? entryHeroContent.toJS() : [];

  return (
    <ContactPageTemplate
      title={entry.getIn(['data', 'title'])}
      hero={{
        image: entry.getIn(['data', 'hero', 'image']),
        background_color: entry.getIn(['data', 'hero', 'background_color']),
        heading: entry.getIn(['data', 'hero', 'heading']),
        description: entry.getIn(['data', 'hero', 'description']),
        content: heroContent,
        button: {
          classes: entry.getIn(['data', 'hero', 'button', 'classes']),
          text: entry.getIn(['data','hero','button','text'])
        }
      }}
      email={{
        heading: entry.getIn(['data', 'email', 'heading']),
        mail: entry.getIn(['data','email', 'mail'])
      }}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
    />
  );
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ContactPagePreview;
