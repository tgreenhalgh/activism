import React from 'react';

class Script extends React.Component {
  constructor() {
    super();

    this.state = {
      script: 'blah blah'
    }
  }
  render() {
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
