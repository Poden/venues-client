import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import AddVenues from './components/AddVenues';


class App extends Component {

  state = {
    venues: [
     
    ],

    enteredzipcode: ''

  };


  
  setZipcode = (zipcode) => {
    this.setState({ enteredzipcode: zipcode });
  }

  componentDidMount(){
    this.getVenues();
  }

  getVenues = () => {
    fetch('http://localhost:8000/api/venues')
    .then(res => res.json())
    .then(venues => this.setState({venues}))
  }

  addVenue =(venue) => {
    this.setState({venues: [...this.state.venues,venue]})
  }



  render() {
    return (
      <main className='App'>

        <SearchBar
          enteredzipcode={this.state.enteredzipcode}
          venues={this.state.venues}
          onSuccess={this.setZipcode}
        />
       <AddVenues 
       addVenue = {this.addVenue}
       />
      
        <p className="App-intro">{this.state.apiResponse}</p>
        
      </main>
    );
  }
}

export default App;