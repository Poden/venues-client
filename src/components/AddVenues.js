import React from 'react';
import config from'../config';
import './Components.css';

class AddVenues extends React.Component {
  static defaultProps ={
    onVenueSubmit: () => {}
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    const {venue_name, venue_zipcode, venue_website} = event.target
    console.log(venue_name.value)
    this.postVenues(venue_name.value, venue_zipcode.value, venue_website.value)
    venue_name.value = ''
    venue_zipcode.value = ''
    venue_website.value = ''
     }

  postVenues(venue_name, venue_zipcode, venue_website) {
    return fetch(`${config.API_ENDPOINT}/venues`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        venue_name: venue_name,
        zipcode: venue_zipcode,
        website: venue_website,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(venue =>
        this.props.addVenue(venue)
        )
  }

  render() {

    return (
      <div class="flex-input">
        <form onSubmit={this.handleSubmit}>
          
          <h2>Enter Venue Info</h2>

          <div class="enter-name">
          <label>Enter Venue Name</label>
          <input type='text' name='venue_name' required id='new_venue_name'  />
          </div>
          <label>Enter Venue Zipcode</label>
          <input type='text' name='venue_zipcode' required id='new_venue_zipcode'  />

          <label>Enter Venue Name</label>
          <input type='text' name='venue_website' required id='new_venue_website'  />

          <button>Enter</button>
        </form>
        
        
      </div>

    );
  };
};

export default AddVenues;