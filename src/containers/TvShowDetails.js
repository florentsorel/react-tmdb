var React = require('react');
var PropTypes = React.PropTypes;
var TvShow = require('../components/TvShow');

var tmdb = require('../tmdb/api');

var TvShowDetails = React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      tvShow: null,
    }
  },

  findTvShow: function(tvShowId) {
    tmdb.find(tvShowId)
      .then(function(response) {
        this.setState({
          isLoading: false,
          tvShow: response.data
        });
      }.bind(this))
      .catch(function(error) {
        console.warn('Error during the tv show request:' + error)
      });
  },

  componentWillReceiveProps: function(nextProps) {
    this.findTvShow(nextProps.data.id);
  },

  componentDidMount: function() {
    this.findTvShow(this.props.data.id);
  },

  render: function() {
    if (this.state.isLoading === true) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <TvShow
          name={this.props.data.original_name} />

      </div>
    )
  }

});

module.exports = TvShowDetails;