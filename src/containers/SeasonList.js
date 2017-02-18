import React, { Component, PropTypes } from 'react'
import Season from '../components/Season'
import EpisodeList from '../containers/EpisodeList'

import tmdb from '../tmdb/api'

class SeasonList extends Component {

  static propTypes = {
    tvShowId: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
  }

  constructor () {
    super()

    this.state = {
      isLoading: false,
      seasonDetails: null,
      seasonNumber: null,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (seasonNumber) {
    const oldSeasonNumber = this.state.seasonNumber

    // prevent multiple ajax request if the season clicked is the same than previous state
    if (this.state.seasonNumber !== null) {
      var oldValue = this.state.seasonNumber
      if (oldValue == seasonNumber) {
        return
      }
    }

    this.setState({
      isLoading: true,
      seasonNumber: seasonNumber
    });

    tmdb.findSeason(this.props.tvShowId, seasonNumber)
      .then(response => {
        this.setState({
          isLoading: false,
          seasonDetails: response.data
        })
      })
      .catch(error => {
        console.warn('Error during the season& request:' + error)
      })
  }

  renderSeason () {
    return (
      <div>
        <h2 className="h4">In which season did you see the guest?</h2>
        <div className="season-list">
          {this.props.data.map(season => {
            return <Season
              onClick={this.handleClick}
              id={season.id}
              number={season.season_number}
              airDate={season.air_date}
              episodeCount={season.episode_count}
              poster={season.poster_path}
              key={season.id} />
          })}
        </div>
      </div>
    )
  }

  renderEpisodeList () {
    if (this.state.isLoading === true) {
      return (
        <div>Loading...</div>
      )
    }

    return this.state.seasonDetails != null && <EpisodeList data={this.state.seasonDetails.episodes} />
  }

  render () {
    return (
      <div>
        {this.renderSeason()}
        {this.renderEpisodeList()}
      </div>
    )
  }

}

export default SeasonList