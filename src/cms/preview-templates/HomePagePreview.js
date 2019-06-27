import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'

const HomePagePreview = ({ entry, getAsset }) => {
  const entryWhatWeDo = entry.getIn(['data', 'what_we_do'])
  const what_we_do = entryWhatWeDo ? entryWhatWeDo.toJS() : []

  const entryMission = entry.getIn(['data', 'mission'])
  const mission = entryMission ? entryMission.toJS : []

  const entryBenefitAnalysis = entry.getIn(['data', 'benefit_analysis'])
  const benefit_analysis = entryBenefitAnalysis ? entryBenefitAnalysis.toJS : []

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      image={entry.getIn(['data', 'image'])}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
