import React from 'react';

import SearchForm from './SearchForm.jsx';
import MembersOfCongress from './MembersofCongress.jsx';

class AddressVerify extends React.Component {
  constructor() {
  super();

  this.state = {
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    addressDone: false,
    MOCDone: false
  };

  this.UPSRequestToken= {
      "UPSSecurity": {
      "UsernameToken": {
      "Username": config.userID,
      "Password": config.userPW
      },
      "ServiceAccessToken": {
        "AccessLicenseNumber": config.UPSkey
        }
      },
      "XAVRequest": {
        "Request": {
        "RequestOption": "1",
        "TransactionReference": {
          "CustomerContext": "Verify Address"
          }
        },
        "MaximumListSize": "10",
        "AddressKeyFormat": {
        "ConsigneeName": "",
        "BuildingName": "",
        "AddressLine": "",
        "PoliticalDivision2": "",
        "PoliticalDivision1": "",
        "PostcodePrimaryLow": "",
        "CountryCode": "US"
        }
      }
    };

    this.UPSUrl = 'https://wwwcie.ups.com/rest/XAV';
  }

  updateToken() {
    this.UPSRequestToken.XAVRequest.AddressKeyFormat.ConsigneeName = this.props.formState.fullName;
    this.UPSRequestToken.XAVRequest.AddressKeyFormat.AddressLine = this.props.formState.address;
    this.UPSRequestToken.XAVRequest.AddressKeyFormat.PoliticalDivision2 = this.props.formState.city;
    this.UPSRequestToken.XAVRequest.AddressKeyFormat.PoliticalDivision1 = this.props.formState.state;
    this.UPSRequestToken.XAVRequest.AddressKeyFormat.PostcodePrimaryLow = this.props.formState.zip;
  }

  search = () => {
    this.updateToken();
    var request = new Request(this.UPSUrl, {
      method: 'POST',
      body: JSON.stringify(this.UPSRequestToken),
      headers: new Headers({
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods":"POST",
        "Access-Control-Allow-Origin":"*",
        "Content-Type":"application/json"
      })
  });

      console.log('Posting request to UPS API...');
      fetch(request)
        .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }

          // Examine the text in the response
          response.json()
            .then(data => {
              console.log('data: ' + JSON.stringify(data));
              if (Array.isArray(data.XAVResponse.Candidate)) {
                if (Array.isArray(data.XAVResponse.Candidate[0].AddressKeyFormat.AddressLine)) {
                  var constituentAddress = data.XAVResponse.Candidate[0].AddressKeyFormat.AddressLine[0] +
                  ', ' + data.XAVResponse.Candidate[0].AddressKeyFormat.AddressLine[1];
                } else {
                  var constituentAddress = data.XAVResponse.Candidate[0].AddressKeyFormat.AddressLine;
                }
                this.setState({
                  fullName: this.UPSRequestToken.XAVRequest.AddressKeyFormat.ConsigneeName,
                  address: constituentAddress,
                  city: data.XAVResponse.Candidate[0].AddressKeyFormat.PoliticalDivision2,
                  state: data.XAVResponse.Candidate[0].AddressKeyFormat.PoliticalDivision1,
                  zip: data.XAVResponse.Candidate[0].AddressKeyFormat.PostcodePrimaryLow + '-' + data.XAVResponse.Candidate[0].AddressKeyFormat.PostcodeExtendedLow,
                  addressDone: true
                });
              } else {
                if (Array.isArray(data.XAVResponse.Candidate.AddressKeyFormat.AddressLine)) {
                  var constituentAddress = data.XAVResponse.Candidate.AddressKeyFormat.AddressLine[0] +
                  ', ' + data.XAVResponse.Candidate.AddressKeyFormat.AddressLine[1];
                } else {
                  var constituentAddress = data.XAVResponse.Candidate.AddressKeyFormat.AddressLine;
                }
                this.setState({
                  fullName: this.UPSRequestToken.XAVRequest.AddressKeyFormat.ConsigneeName,
                  address: constituentAddress,
                  city: data.XAVResponse.Candidate.AddressKeyFormat.PoliticalDivision2,
                  state: data.XAVResponse.Candidate.AddressKeyFormat.PoliticalDivision1,
                  zip: data.XAVResponse.Candidate.AddressKeyFormat.PostcodePrimaryLow + '-' + data.XAVResponse.Candidate.AddressKeyFormat.PostcodeExtendedLow,
                  addressDone: true
                });
              }
            });
        })
        .catch(err => {
          console.log('Fetch Error: ', err);
        });
  }

  componentDidMount() {
    this.search();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.addressDone ? <h2>Your verified address is:</h2> : <h2>Verifying your address</h2>}
          <p>{ this.state.fullName }</p>
          <p>{ this.state.address }</p>
          {this.state.addressDone ? <p>{ this.state.city }, { this.state.state } { this.state.zip }</p> : <p></p>}
        </div>
        <div>
          {this.state.addressDone ? <MembersOfCongress formState={ this.state }/> : <p></p>}
        </div>
      </div>
    )
  }
}

export default AddressVerify;
