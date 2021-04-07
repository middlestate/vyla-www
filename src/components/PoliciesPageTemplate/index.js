import React, { Fragment } from 'react'
import Content from '../Content'
// import { kebabCase } from 'lodash'
// import { Link } from 'gatsby'
// import NavBar from '../NavBar'

const PoliciesPageTemplate = ({
  content,
  contentComponent,
  heading,
  subheading,
}) => {
  const PostContent = contentComponent || Content
  return (
    <Fragment>
        <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>{heading}</h1>
        <h2 className='subtitle is-size-6 has-text-weight-light is-italic'>{subheading}</h2>
        <div className='columns is-multiline is-mobile is-centered'>
            <div className='column is-8 is-half-mobile'>
                <div className='is-size-7' >
                    <PostContent content={content} />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default PoliciesPageTemplate