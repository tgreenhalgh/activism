import React from 'react';

import Header from './Header.jsx';
import InputForm from './InputForm.jsx';
import Search from './Search.jsx';
import Script from './Script.jsx';

const apiKey = config.key;

// var script = "test " + " script";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      address: '',
      city: '',
      state: 'California',
      zip: '',
      phone: '',
      script: '',
      showInput: true,
      showCongress: false,
      showFax: false,
      date: new Date().toString()
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Header />
        </div>
        <div className='row'>
          <InputForm />
          <Search />
        </div>
      </div>
    )
  }
}

export default App;
