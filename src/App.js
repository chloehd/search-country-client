import React, { Component } from 'react';
import Search from "./Components/Search.js";
//import countries from "";
import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          <h2>Autocomplete</h2>
          <Search />
        </div>
    );
  }
}

export default App;
