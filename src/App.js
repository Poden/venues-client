import React, { Component } from 'react';
import SearchBar from './components/SearchBar';



class App extends Component {

  state = {
    venues: [
      {
      id: 1,
      name: 'House of Blues',
      zipcode: '75202'
    },
    {
      id: 2,
      name: 'The Bomb Factory',
      zipcode: '75226'
    },
    {
      id: 3,
      name: 'South Side Ballroom',
      zipcode: '75215'
    },
    {
      id: 4,
      name: 'Dos Equis Pavilion',
      zipcode: '75210'
    }

    ],

    enteredzipcode: ''

  };


  
  setZipcode = (zipcode) => {
    this.setState({ enteredzipcode: zipcode });
  }

  

  render() {
    return (
      <main className='App'>

        <SearchBar
          enteredzipcode={this.state.enteredzipcode}
          venues={this.state.venues}
          onSuccess={this.setZipcode}
        />
       
      
        <p className="App-intro">{this.state.apiResponse}</p>
        
      </main>
    );
  }
}

export default App;