import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Search from './containers/Search'
import TvShowDetails from './containers/TvShowDetails'

class App extends Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      tvShow: null
    }
  }

  handleChange (data) {
    if (data.length === 0) {
      return
    }

    if (this.state.tvShow !== null) {
      var oldValue = this.state.tvShow.name
      if (oldValue == data[0].name) {
        return
      }
    }

    this.setState({
      tvShow: data[0]
    })
  }

  render() {
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
}

ReactDOM.render(<App />, document.getElementById('app'))