import React, { Component, PropTypes } from 'react'
import { asyncContainer, Typeahead } from 'react-bootstrap-typeahead'
const AsyncTypeahead = asyncContainer(Typeahead)
import tmdb from '../tmdb/api'

class Search extends Component {

  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    placeholder: 'Search...'
  }

  constructor () {
    super()
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      options: []
    }
  }

  handleSearch (query) {
    tmdb.search(query)
      .then(response => {
        this.setState({
          options: response.data.results
        })
      })
      .catch(error => {
        console.warn('Error during the search:' + error)
      })
  }

  render () {
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

}

export default Search