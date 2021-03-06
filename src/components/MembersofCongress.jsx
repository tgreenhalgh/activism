import React from 'react';

class MembersOfCongress extends React.Component {
  constructor() {
    super();

    this.state = {
      address: '',
      seniorSenator: '',
      juniorSenator: '',
      representative: ''
    };
  }

  componentDidMount() {
    var address = this.props.formState.address + ', ' + this.props.formState.city + ', ' + this.props.formState.state + ' ' + this.props.formState.zip
    this.setState({
      address
    });
    this.search(address);
  }

  search = (query) => {
    // const constituent = this.state.address + ' ' +
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
            this.setState({
              seniorSenator: data.officials[2].name,
              juniorSenator: data.officials[3].name,
              representative: data.officials[4].name,
            });
          });
      })
      .catch(err => {
        console.log('Fetch Error: ', err);
      });
  }

  render() {
    return (
      <div>
          { this.state.seniorSenator
            ?
            <div>
              <h2>Your members of Congress are:</h2>
              <p>Senator { this.state.seniorSenator }</p>
              <p>Senator { this.state.juniorSenator }</p>
              <p>Representative { this.state.representative }</p>
            </div>
            :
            <p></p>
           }
      </div>
      )
  }
}

export default MembersOfCongress;
