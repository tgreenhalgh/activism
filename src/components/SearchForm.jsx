import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      <form className='form-inline' onSubmit={ this.handleSubmit }>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='search'
            placeholder='Enter your address'
            style={{ marginRight: '5px' }}
            onChange={ (e) => {
              this.setState({ query: e.target.value });
            }}
          />
        </div>

        <button
          className='btn btn-default'
          type='submit'
        >
          Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchForm;
