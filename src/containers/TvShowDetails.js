import React, { Component, PropTypes } from 'react'
import TvShow from '../components/TvShow'
import SeasonList from './SeasonList';
import tmdb from '../tmdb/api'

class TvShowDetails extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  constructor() {
    super()
    this.state = {
      isLoading: true,
      tvShow: null,
    }
  }

  findTvShow (tvShowId) {
    tmdb.find(tvShowId)
      .then(response => {
        this.setState({
          isLoading: false,
          tvShow: response.data
        })
      })
      .catch(error => {
        console.warn('Error during the tv show request:' + error)
      })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isLoading: true,
    })
    this.findTvShow(nextProps.data.id)
  }

  componentDidMount () {
    this.findTvShow(this.props.data.id)
  }

  render () {
    if (this.state.isLoading === true) {
      return (
        <div>Loading...</div>
      )
    }

    const data = this.props.data
    return (
      <div>
        <div className="tvshow-list">
          <TvShow
            name={data.original_name}
            poster={data.poster_path}
            firstAirDate={data.first_air_date} />
        </div>

        <SeasonList data={this.state.tvShow.seasons} />
      </div>
    )
  }

}

export default TvShowDetails