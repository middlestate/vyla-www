import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Hero from '../Hero'
import Mission from '../Mission'
import Story from '../Story'
import Team from '../Team'

const AboutPageTemplate = ({ title, meta_title, meta_description, hero, story, mission, team }) => (
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
      content={hero.content}
      button={hero.button}
    />
    <Story image={story.image} title={story.title} heading={story.heading} content={story.content} />
    <Mission title={mission.title} heading={mission.heading} cards={mission.cards} />
    <Team founders={team.founders} />
  </div>
)

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  hero: PropTypes.shape({
    background_color: PropTypes.string,
    image: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.array,
    button: PropTypes.object,
  }),
  story: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    content: PropTypes.array,
  }),
  mission: PropTypes.shape({
    title: PropTypes.string,
    heading: PropTypes.string,
    cards: PropTypes.array,
  }),
  team: PropTypes.shape({
    founders: PropTypes.array,
  }),
}

export default AboutPageTemplate
