// import PropTypes from 'prop-types'
import React from 'react';
import spinner from './spinner.gif';

const Spinner = ()=> {
    return (
      <div className='d-flex justify-content-center' >
        <img src={spinner} alt="spinner" />
      </div>
    )
  
}
 export default Spinner