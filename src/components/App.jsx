import React from 'react';

import Header from './Header.jsx';
import Button from './Button.jsx';
import InputForm from './InputForm.jsx';
import InputVerify from './InputVerify.jsx';
import Script from './Script.jsx';
import AddressVerify from './AddressVerify.jsx';

const apiKey = config.key;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page1: true,   // InputForm
      page2: false, // InputVerify
      page3: false, // AddressVerify
      page4: false, // MembersOfCongress
      fullName: 'Thomas Greenhalgh',
      address: '2405 34th St #32',
      city: 'Santa Monica',
      state: 'CA',
      zip: '90405',
      phone: '310-795-6234',
      script: '',
      verified: false,
      next: true,
      date: new Date().toString()
    };

    this.onClick = this.onClick.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleVerified = this.handleVerified.bind(this);
  }

  onClick(e) {
    if (this.state.page1) {
      this.setState({
        page1: false,
        page2: true,
        page3: false,
        page4: false
      });
    }
    if (this.state.page2) {
      this.setState({
        page1: false,
        page2: false,
        page3: true,
        page4: false
      });
    }
    if (this.state.page3) {
      this.setState({
        page1: false,
        page2: false,
        page3: false,
        page4: true
      });
    }
  }

  handleFormChange(e) {
    var name = e.target.id;
    this.setState({ [name]: e.target.value });
  }

  handleVerified() {
    this.setState({
      verified: true
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
        {
          this.state.page1 ?
            <InputForm formState={ this.state } handleFormChange={ this.handleFormChange } />
          : (this.state.page2 ?
              <AddressVerify formState={ this.state }/>
            : (this.state.page3 ?
                <InputVerify formState={ this.state }/>
                : <p></p>
              )
            )
        }
        </div>
        <Button onClick={ this.onClick } next={ this.state.next }/>
      </div>
    )
  }
}

export default App;
