import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import AboutPageTemplate from '../components/AboutPageTemplate';
import Layout from '../components/Layout';

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        hero={frontmatter.hero}
        content={frontmatter.content}
        image={frontmatter.image}
        story={frontmatter.story}
        mission={frontmatter.mission}
        investors={frontmatter.investors}
        team={frontmatter.team}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        hero {
          background_color
          image
          heading
          description
          content {
            text
          }
          button {
            classes
            text
            link
          }
        }
        story {
          image
          title
          heading
          content {
            text
          }
        }
        mission {
          title
          heading
          cards {
            image
            heading
            list_items
          }
        }
        investors {
          cards {
            logo
            text
          }
        }
        team {
          cards {
            image
            name
            title
            blurb {
              text
            }
          }
        }
      }
    }
  }
`;
