import React from 'react';

import SearchForm from './SearchForm.jsx';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      seniorSenator: '',
      juniorSenator: '',
      representative: '',
      query: ''
    };
  }

  search = (query) => {

    // const apiUrl = `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAuDgqywdTpK-LQWXOmA23KimDfCGsg4Tw&address=2405%2034th%20st.%20Santa%20Monica%20CA&includeOffices=true&levels=country`

    const apiUrl = `https://www.googleapis.com/civicinfo/v2/representatives?key=${config.key}&address=${query}&includeOffices=true&levels=country`

    fetch(apiUrl)
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        // Examine the text in the response
        response.json()
          .then(data => {
            console.log('street: ' + data.normalizedInput.line1);
            console.log('city: ' + data.normalizedInput.city);
            console.log('state: ' + data.normalizedInput.state);
            console.log('zip: ' + data.normalizedInput.zip);
            for (let i = 0; i < data.officials.length; i++) {
              console.log(data.officials[i].name);
            }
          });
      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {
    return (
      <div
          style={{
            marginBottom: '20px'
          }}
        >
          <SearchForm onSearch={ this.search  }/>
        </div>
      )
  }
}

export default Search;
