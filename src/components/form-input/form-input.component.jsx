import React from 'react';
import './form-input.styles.scss';
const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className='form-group'>
      <input
        className='form-input'
        type={otherProps.type}
        onChange={(event) => handleChange({ [label]: event.target.value })}
        {...otherProps}
      />
      {label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
