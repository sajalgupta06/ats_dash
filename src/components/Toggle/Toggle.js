import React from "react";
import "./Toggle.scss";

const Toggle = ({ name, setPreferences }) => {
  const handleChange = (evt) => {
    setPreferences((j) => {
      return { ...j, [name]: !j[name] };
    });
  };
  return (
    <div className='toggle-container'>
      <div className='setasf'>set as a filter</div>
      <label class='switch'>
        <input onClick={handleChange} type='checkbox' />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default Toggle;
