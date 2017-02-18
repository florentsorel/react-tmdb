import React, { PropTypes } from 'react'
import moment from 'moment'

const Season = (props) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w' + props.posterSize + props.poster
  return (
    <div className="season" onClick={() => props.onClick(props.id)}>
      <div className="season-number">Season {props.number}</div>
      {props.poster && <img src={posterUrl} alt={props.number} className="season-poster"/>}
      {props.airDate && <div className="season-date">{moment(props.airDate).format('MM/DD/YYYY')}</div>}
    </div>
  )
}

Season.propTypes = {
  id: PropTypes.number,
  number: PropTypes.number.isRequired,
  airDate: PropTypes.string.isRequired,
  poster: PropTypes.string,
  posterSize: PropTypes.oneOf([92, 154, 185, 342, 500, 780]),
  onClick: PropTypes.func
}

Season.defaultProps = {
  posterSize: 154
}

export default Season