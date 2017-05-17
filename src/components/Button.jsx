import React from 'react';

// const Button = (props) => {
class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button
          className='btn btn-primary btn-sm'
          onClick={ this.props.onClick }
        >{ this.props.next ? 'Next' : 'Send fax' }
        </button>
      </div>
    )
  }
}

export default Button;
