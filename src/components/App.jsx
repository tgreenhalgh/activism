import React from 'react';

import InputForm from './InputForm.jsx';
import Search from './Search.jsx';

const apiKey = config.key;

// var script = "test " + " script";

class App extends React.Component {
  render() {
    return (
      <div>
        <InputForm />
        <Search />
      </div>
    )
  }
}

export default App;
