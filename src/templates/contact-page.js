import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ContactPageTemplate from '../components/ContactPageTemplate';
import Layout from '../components/Layout';

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        hero={frontmatter.hero}
        email={frontmatter.email}
        button={frontmatter.button}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        hero {
          background_color
          heading
          description
          content {
            text
          }
          image
          button {
            classes
            text
          }
        }
        email {
          heading
          mail
        }
      }
    }
  }
`;
