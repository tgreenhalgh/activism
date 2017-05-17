import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='fullName'>Full name:</label>
          <input
            type='text'
            className='form-control'
            id='fullName'
            placeholder='Firstname Lastname'
            value={ this.props.formState.fullName }
            onChange={ this.props.handleFormChange }
          />
      </div>

      <div className='form-group'>
          <label htmlFor='address'>Street address:</label>
          <input
            type='text'
            className='form-control'
            id='address'
            placeholder='1234 Any St. Apt 5'
            value={ this.props.formState.address }
            onChange={ this.props.handleFormChange }
          />
      </div>

      <div className='form-group'>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            className='form-control'
            id='city'
            placeholder='Enter your city'
            value={ this.props.formState.city }
            onChange={ this.props.handleFormChange }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='state'>State:</label>
          <input
            type='text'
            className='form-control'
            id='state'
            placeholder='Enter your state'
            value={ this.props.formState.state }
            onChange={ this.props.handleFormChange }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='zip'>Zip code:</label>
          <input
            type='text'
            className='form-control'
            id='zip'
            placeholder='Enter your zip code'
            value={ this.props.formState.zip }
            onChange={ this.props.handleFormChange }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone number:</label>
          <input
            type='text'
            className='form-control'
            id='phone'
            placeholder='Enter your phone number'
            value={ this.props.formState.phone }
            onChange={ this.props.handleFormChange }
          />
        </div>
    </div>
    )
  }
}

export default InputForm;
