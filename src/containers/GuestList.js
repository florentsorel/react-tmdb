import React, { Component, PropTypes } from 'react'
import Guest from '../components/Guest'

class GuestList extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render () {
    if (this.props.data.length == 0) {
      return (
        <div>Sorry, no guests was found for this episode.</div>
      )
    }

    return (
      <div>
        <h2 className="h4">Guests</h2>
        <div className="guest-list">
          {this.props.data.map(guest => {
            return <Guest
              id={guest.id}
              character={guest.character}
              name={guest.name}
              image={guest.profile_path}
              creditId={guest.credit_id}
              key={guest.id}
            />
          })}
        </div>
      </div>
    )
  }

}

export default GuestList