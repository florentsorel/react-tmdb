var React = require('react');
var PropTypes = React.PropTypes;

function TvShow (props) {
  return (
    <div>
      {props.name}
    </div>
  )
}

TvShow.propTypes = {
  name: PropTypes.string.isRequired,
}

module.exports = TvShow;