var React = require('react');
var ReactDOM = require('react-dom');

var Search = require('./containers/Search');
var TvShowDetails = require('./containers/TvShowDetails');

var App = React.createClass({
  getInitialState: function() {
    return {
      tvShow: null,
    }
  },

  handleChange: function(data) {
    if (data.length === 0) {
      return;
    }

    if (this.state.tvShow !== null) {
      var oldValue = this.state.tvShow.name;
      if (oldValue == data[0].name) {
        return;
      }
    }

    this.setState({
      tvShow: data[0]
    });
  },

  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Who is that guest?</h1>
        </div>
        <Search
          placeholder="Search a tv show..."
          onChange={this.handleChange} />
        {this.state.tvShow !== null && <TvShowDetails data={this.state.tvShow} />}
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));