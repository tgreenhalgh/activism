import React from 'react';

class InputVerify extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.formState.fullName }
      </div>
    )
  }
}

export default InputVerify;
