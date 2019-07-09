import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import FarmPageTemplate from '../components/FarmPageTemplate';
import Layout from '../components/Layout';

const FarmPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <FarmPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        hero={frontmatter.hero}
        story={frontmatter.story}
        benefit_analysis={frontmatter.benefit_analysis}
      />
    </Layout>
  );
};

FarmPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default FarmPage;

export const farmPageQuery = graphql`
  query FarmPage($id: String!) {
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
          button {
            classes
            text
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
        benefit_analysis {
          title
          heading
          cards {
            heading
            content
          }
        }
      }
    }
  }
`
