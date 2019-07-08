import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Layout from '../components/Layout'

const ContactPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        background_color={frontmatter.background_color}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
        email={frontmatter.email}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        background_color
        subtitle
        meta_title
        description
        email
      }
    }
  }
`
