import React, { Component, PropTypes } from 'react'
import Episode from '../components/Episode'
import GuestList from './GuestList'

class EpisodeList extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  constructor () {
    super()

    this.state = {
      guests: null,
      currentEpisode: null,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (guests, episodeId) {
    this.setState({
      guests: guests,
      currentEpisode: episodeId
    })
  }

  render () {
    return (
      <div>
        <h2 className="h4">In which episode did you see the guest?</h2>
        <ul className="list-group episode-list">
          {this.props.data.map(episode => {
            const active = episode.id === this.state.currentEpisode
            return <Episode
              onClick={this.handleClick}
              id={episode.id}
              title={episode.name}
              number={episode.episode_number}
              airDate={episode.air_date}
              guests={episode.guest_stars}
              active={active}
              key={episode.id}
            />
          })}
        </ul>

        {this.state.guests != null && <GuestList data={this.state.guests} />}
      </div>
    )
  }

}

export default EpisodeList