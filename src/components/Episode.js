import React, { PropTypes } from 'react'
import moment from 'moment'

const Episode = (props) => {
  return (
    <a className={"list-group-item" + (props.active ? ' active' : '')} onClick={() => props.onClick(props.guests, props.id)}>
      <span>{props.number}.</span> <span>{props.title}</span>
    </a>
  )
}

Episode.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  airDate: PropTypes.string,
  onClick: PropTypes.func,
  guests: PropTypes.array,
}

export default Episode