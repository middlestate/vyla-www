import React from 'react'

const VylaButton = ({ classes, url, text }) => (
  <a href={url} className={classes}>{text}</a>
)

export default VylaButton
