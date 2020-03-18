import React from 'react';


class SearchBar extends React.Component {

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.onSuccess(event.target.zipcode.value);
    event.target.zipcode.value = "";
  }
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Enter Zipcode</h2>
          <input type="input" name="zipcode"  />

          <button>Enter</button>
        </form>

        <h3>The Zipcode entered is:{this.props.enteredzipcode} </h3>

        <ul>
          {this.props.venues.filter(venue => {
            return venue.zipcode === this.props.enteredzipcode
          }).map(item => <li>{item.name}</li>)}
        </ul>
      </div>

    );
  };
};


export default SearchBar;