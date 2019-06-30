import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        image={frontmatter.image}
        what_we_do={frontmatter.what_we_do}
        mission={frontmatter.mission}
        benefit_analysis={frontmatter.benefit_analysis}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        meta_title
        meta_description
        heading
        description
        image
        what_we_do {
          image
          alt
          tagline
          heading
          content {
            text
          }
        }
        mission {
          title
          heading
          quote
          cite_text
          cite_name
          cite_logo
          cards {
            image
            heading
            list_items {
              list_item
            }
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
