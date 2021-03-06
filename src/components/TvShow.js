import React, { PropTypes } from 'react'
import moment from 'moment'

const TvShow = (props) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w' + props.posterSize + props.poster
  return (
    <div className="tvshow">
      {props.poster && <img src={posterUrl} alt={props.name} className="tvshow-poster"/>}
      <div className="tvshow-info">
        <div className="tvshow-info-title">{props.name}</div>
        {props.firstAirDate && <div>{moment(props.firstAirDate).format('MM/DD/YYYY')}</div>}
      </div>
    </div>
  )
}

TvShow.propTypes = {
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  posterSize: PropTypes.oneOf([92, 154, 185, 342, 500, 780]),
  firstAirDate: PropTypes.string
}

TvShow.defaultProps = {
  posterSize: 92
}

export default TvShow