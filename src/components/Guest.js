import React, { PropTypes } from 'react'

const Guest = (props) => {
  const image = 'https://image.tmdb.org/t/p/w' + props.imageSize + props.image
  return (
    <div className="guest">
      {props.image && <img src={image} alt={props.name} className="guest-image"/>}
      <div className="guest-info">
        <div className="guest-info-name">{props.name} as {props.character}</div>
      </div>
    </div>
  )
}

Guest.propTypes = {
  id: PropTypes.number.isRequired,
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  creditId: PropTypes.string,
  image: PropTypes.string,
  imageSize: PropTypes.oneOf([45, 185]),
}

Guest.defaultProps = {
  imageSize: 185
}

export default Guest