var React = require('react');
var PropTypes = React.PropTypes;
var Typeahead = require('react-bootstrap-typeahead').Typeahead;
var AsyncTypeahead = require('react-bootstrap-typeahead').asyncContainer(Typeahead);
var tmdb = require('../tmdb/api');

var Search = React.createClass({
  propTypes: {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      placeholder: 'Search...'
    }
  },

  getInitialState: function() {
    return {
      options: []
    }
  },

  handleSearch: function(query) {
    tmdb.search(query)
      .then(function(response) {
        this.setState({
          options: response.data.results
        });
      }.bind(this))
      .catch(function(error) {
        console.warn('Error during the search:' + search)
      });
  },

  render: function() {
    return (
      <AsyncTypeahead
        delay={500}
        autoFocus={true}
        onSearch={this.handleSearch}
        onChange={this.props.onChange}
        options={this.state.options}
        filterBy={['name']}
        labelKey="name"
        placeholder={this.props.placeholder}
      />
    )
  }

});

module.exports = Search;