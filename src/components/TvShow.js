import React, { PropTypes } from 'react'

const TvShow = (props) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w' + props.posterSize + props.poster
  return (
    <div className="tvshow-list-item">
      {props.name}

      <img src={posterUrl} alt={props.name} />

      {props.firstAirDate && <div>{props.firstAirDate}</div>}
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
  posterSize: 154
}

export default TvShow