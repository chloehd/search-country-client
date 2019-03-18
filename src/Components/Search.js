import React, { Component } from 'react';
import axios from "axios";
import { getCountries } from "../api.js";



class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: {},
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
        // update our state array with the data from the API 
        this.setState({ countries: response.data });
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
    const { countries, countrySearch } = this.state;

    const lowerSearch = countrySearch.toLowerCase();
    const filteredArray = countries.filter(oneCountry => {
      const lowerName = oneCountry.toLowerCase();
      return lowerName.includes(lowerSearch);
    })
 


    return (
      <section className="searchResult">
        <form onSubmit={event => this.handleSubmit(event)}>
        Start typing:

          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.countrySearch}
            name="countrySearch"
            type="text"
            placeholder="Search for a country"
            autoComplete="on"
          />
          <button>Submit</button>

        </form>

        {countrySearch === "" ? null : (
          <div className="countryList container">
            <ul className="row d-flex justify-content-center">
              {filteredArray.map(oneCountry => {
                return (
                  <li
                    className="oneCountry col-lg-4 col-md-6 col-sm-12 w-100"
                    key={oneCountry.name}
                  >
                    <div className="li-content">
                      <p>{oneCountry.name}</p>
                      </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      
      </section>
    );
  }
}

export default Search;