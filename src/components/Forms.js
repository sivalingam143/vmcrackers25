  import React from 'react'
  import Select from 'react-select'
  import "./form.css";
  const Forms = ({ label, placeholder, name, value, onChange }) => {
    return (
      <div>
        <div className='pb-3'>{label}</div>
        <input
          name={name}
          placeholder={placeholder}
          className='form-control'
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

  const DropDowns = ({ options, placeholder, label, name, value, onChange }) => {
    return (
      <div>
        <div className='pb-3'>{label}</div>
      <Select
    name={name}
    options={options}
    placeholder={placeholder}
    className="w-100 animated-select"
    classNamePrefix="rs"
    value={value}
    onChange={onChange}
  />

      </div>
    );
  };


  export {Forms,DropDowns,} 