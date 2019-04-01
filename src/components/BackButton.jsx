import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const BackButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
    <button {...rest} 
      onClick={(event) => {
        onClick && onClick(event)
        history.goBack();
      }}
      className="link-btn"
    />
  )
}

BackButton.propTypes = {
  children: PropTypes.node.isRequired
}

export default withRouter(BackButton)