import React from 'react'

const VylaButton = ({ classes, url, text }) => (
  <div style={{ overflow: 'hidden', width: 140 }} className={classes}>
    <a href={url} style={{color: 'white'}}>{text}</a>
  </div>
)

export default VylaButton
