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
      guestStars: null,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (guestStars) {
    this.setState({
      guestStars: guestStars
    })
  }

  render () {
    return (
      <div>
        <h2 className="h4">In which episode did you see the guest?</h2>
        <ul className="list-group episode-list">
          {this.props.data.map(episode => {
            return <Episode
              onClick={this.handleClick}
              id={episode.id}
              title={episode.name}
              number={episode.episode_number}
              airDate={episode.air_date}
              guestStars={episode.guest_stars}
              key={episode.id}
            />
          })}
        </ul>

        {this.state.guestStars != null && <GuestList data={this.state.guestStars} />}
      </div>
    )
  }

}

export default EpisodeList