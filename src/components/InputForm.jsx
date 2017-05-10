import React from 'react';

class InputForm extends React.Component {
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

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.id;
    this.setState({ [name]: value });
    // console.log('name: ' + name + ' state: ' + value);
  }

  handleSubmit(event) {
    event.preventDefault();

    var script = 'Hi, my name is ' + this.state.fullName +
       ' and I’m a constituent from ' + this.state.city + ', ' + this.state.state + ' ' + this.state.zip +
       ' and a member of Indivisible CA-33. After 3 months, the Senate Intelligence Committee has made little progress in the investigation of collusion between the Russia and Trump Campaign. The committee has yet to issue a single subpoena for documents or interview any key witnesses who are central to the probe. Chairman Senator Richard Burr, has so far FAILED to respond to requests from the panel’s Democrats to sign letters doing so. Please demand the recusal of Senator Richard Burr from the investigation as he is blocking the American people’s right to know!';
    console.log('script: ' + script);
    this.setState({
      script: script,
      showInput: false,
      showCongress: true
    });

    console.log('showCongress ' + this.state.showCongress + ' script ' + this.state.script)
  }

  render() {
    const { fullName, address, city, state, zip, phone } = this.state;
    const { script } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        <div className='form-group'>
          <label htmlFor='fullName'>Full name:</label>
          <input
            type='text'
            className='form-control'
            id='fullName'
            placeholder='Firstname Lastname'
            value={ fullName }
            onChange={ this.handleFormChange }
            ref='fullName'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='address'>Street address (including Apt):</label>
          <input
            type='text'
            className='form-control'
            id='address'
            placeholder='1234 Any St., Apt 5'
            value={ address }
            onChange={ this.handleFormChange }
            ref='address'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            className='form-control'
            id='city'
            placeholder='Enter your city'
            value={ city }
            onChange={ this.handleFormChange }
            ref='city'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='state'>State:</label>
          <input
            type='text'
            className='form-control'
            id='state'
            placeholder='Enter your state'
            value={ state }
            onChange={ this.handleFormChange }
            ref='state'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='zip'>Zip code:</label>
          <input
            type='text'
            className='form-control'
            id='zip'
            placeholder='Enter your zip code'
            value={ zip }
            onChange={ this.handleFormChange }
            ref='zip'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone number:</label>
          <input
            type='text'
            className='form-control'
            id='phone'
            placeholder='Enter your phone number'
            value={ phone }
            onChange={ this.handleFormChange }
            ref='phone'
          />
        </div>

        <input
          className='btn btn-submit'
          type="submit"
          name="writeScript"
          value="Submit"
        />
      </form>
    );
  }
}

export default InputForm;
