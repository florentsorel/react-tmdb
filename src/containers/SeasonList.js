import React, { Component, PropTypes } from 'react'
import Season from '../components/Season'

class SeasonList extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (seasonId) {
    
  }

  render () {
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
              key={season.id}
            />
          })}
        </div>
      </div>
    )
  }

}

export default SeasonList