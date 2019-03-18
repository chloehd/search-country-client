import React, { Component } from 'react';
import Search from "./Components/Search.js";
//import countries from "";
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     myCountry: countries,
  //     searchString: ""
  //   }
  // }


  // handleSearch(event){
  //   const {value} = event.target;
  //   const filteredArray = countries.filter(
  //       (oneCountry)=> oneCountry.name.toLowerCase().includes(value.toLowerCase())
  //       )
  //   this.setState({searchString: value, myCountry: filteredArray})
  // }


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
