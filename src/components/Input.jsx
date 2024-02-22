// Input.js
import React from 'react';

const Input = ({ type, name, inputValue, handleChange }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <br />
    </>
  );
};

export default Input;
