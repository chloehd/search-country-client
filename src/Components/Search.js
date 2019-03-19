import React, { Component } from 'react';
import axios from "axios";


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryList: [],
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
    // link to the data stocked in the back-end
    axios.get(
      "http://localhost:5000/api/countries",
      { withCredentials: true } 
      )
      .then(response => {
        // update the state array with the data from the API 
        this.setState({ countryList: response.data });
      })
      .catch(err => {
        console.log("Country List ERROR", err);
      });
  }


  render() {
    const { countrySearch } = this.state;

    // avoid case-sensitive research
    const lowerSearch = countrySearch.toLowerCase();
    const filteredArray = function countriesSearch(countriesArray) {
    countriesArray.filter(element => {
      return element.name;
    });

    countriesArray.filter(oneCountry => {
      const lowerName = oneCountry.name.toLowerCase();
      return lowerName.includes(lowerSearch);
    })

  }
 

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
            <ul>

              {/* would like to map inside all countries 
              in the json to show the one corresponding to the typed value
              NOT WORKING
              */}
              {filteredArray.map(oneCountry => {
                return ( 
                  <li
                    key={oneCountry.name}
                  >
                    <div>
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