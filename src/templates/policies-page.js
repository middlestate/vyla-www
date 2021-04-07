import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ProductsPageTemplate from '../components/PoliciesPageTemplate'
import Layout from '../components/Layout'

const PoliciesPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ProductsPageTemplate
                content={post.html}
                contentComponent={HTMLContent}
                meta_title={post.frontmatter.meta_title}
                meta_description={post.frontmatter.meta_description}
                heading={post.frontmatter.heading}
                subheading={post.frontmatter.subheading}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

PoliciesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PoliciesPage

export const pageQuery = graphql`
  query ProductsByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        heading
        subheading
        meta_title
        meta_description
      }
    }
  }
`