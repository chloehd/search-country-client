import React, { Component } from 'react';
//import axios from "axios";
import { getCountries } from "../api.js";



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryArray: [],
      countrySearch: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  componentDidMount() {
    // CONNECTION FRONT & BACK is HERE :
    // get data from our Express API (localhost:5555) (now in api.js)
    getCountries().then(response => {
      // SAVE the JSON data from the API into the state
      this.setState({ countryArray: response.data });
      console.log("AAAAAAAAAAAAHHHHHHHHHH", response.data);
    });
  }



  //   axios.get("https://api.ipstack.com/check?access_key=a1d5abe0fd6709ed6ee80744cc29def2")
  //   .then(response => {
  //     console.log(response.data);

  //   } )
  //   .catch(err => console.log("Current Location Error", err))
  // }


  // handleSearch(event){
  //   const {value} = event.target;
  //   const filteredArray = countries.filter(
  //       (oneCountry)=> oneCountry.name.toLowerCase().includes(value.toLowerCase())
  //       )
  //   this.setState({searchString: value, userCountries: filteredArray})



  render() {
    const { countryArray, countrySearch } = this.state;

    const lowerSearch = countrySearch.toLowerCase();
    const filteredArray = countryArray.filter(oneCountry => {
      const lowerName = oneCountry.name.toLowerCase();
      return lowerName.includes(lowerSearch);
    });

    return (
      <section className="searchResult">
        <form onSubmit={event => this.handleSubmit(event)}>
        Start typing:

          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.oneCountry}
            name="countrySearch"
            type="text"
            //className="search-bar text-center w-100"
            placeholder="Search for a country"
            autoComplete="on"
          />
          <button>Submit</button>

        </form>

      
      </section>
    );
  }
}







//     render() {
//       const { searchString } = this.state;

//       return (
//         <label>
//           Start typing:
//        <input type="text" name="search" placeholder="Austria" value={searchString} />
//           <button>Submit</button>
//         </label>
//       );
//     }
// }




export default Search;