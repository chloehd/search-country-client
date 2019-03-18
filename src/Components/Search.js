import React, { Component } from 'react';
import axios from "axios";
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

  // retrieve value typed in input
  genericOnChange(event) {
    this.setState({ countrySearch: event.target.value });
  }


  componentDidMount() {
    axios.get(
      "http://localhost:5000/api/countries",
      { withCredentials: true } // force axios to send cookies accross domains
      )
      .then(response => {
        console.log("Countries List", response.data);
        // update our state array with the data from the API 
        this.setState({ countryArray: response.data });
      })
      .catch(err => {
        console.log("Country List ERROR", err);
      });
  }



  //   axios.get("https://api.ipstack.com/check?access_key=a1d5abe0fd6709ed6ee80744cc29def2")
  //   .then(response => {
  //     console.log(response.data);

  //   } )
  //   .catch(err => console.log("Current Location Error", err))
  // }



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
            value={this.state.countrySearch}
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