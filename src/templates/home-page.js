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
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        hero={frontmatter.hero}
        what_we_do={frontmatter.what_we_do}
        mission={frontmatter.mission}
        quote={frontmatter.quote}
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
            link
          }
        }
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
          cards {
            image
            heading
            list_items
          }
        }
        quote {
          quote
          cite_text
          cite_name
          cite_logo
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
