import React from 'react';

class Script extends React.Component {
  constructor() {
    super();

    this.state = {
      script: 'blah blah'
    }
  }
  render() {

    // var script = 'Hi, my name is ' + this.state.fullName +
    //    ' and I’m a constituent from ' + this.state.city + ', ' + this.state.state + ' ' + this.state.zip +
    //    ' and a member of Indivisible CA-33. After 3 months, the Senate Intelligence Committee has made little progress in the investigation of collusion between the Russia and Trump Campaign. The committee has yet to issue a single subpoena for documents or interview any key witnesses who are central to the probe. Chairman Senator Richard Burr, has so far FAILED to respond to requests from the panel’s Democrats to sign letters doing so. Please demand the recusal of Senator Richard Burr from the investigation as he is blocking the American people’s right to know!';
    // console.log('script: ' + script);
    return (
      <div>
        <textarea type="text" name="script" rows="20" cols="40" placeholder="Script Goes Here"
        value={ this.state.script } onChange={ this.handleFormChange }>
        </textarea>
        <br/>
        <input type="submit" name="sendFax" value="Send Fax" />
      </div>
    )
  }
}

export default Script;
