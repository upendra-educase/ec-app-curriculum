import React, { useState } from 'react';
import Select from 'react-select';
import "./DropDown.css"



function DropDown({options,placeholder,defaultValue,onChange,isClearable,isSearchable,id}) {
  

  return (
    <div className="Dropdown-container">
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isClearable={isClearable}
        isSearchable={isSearchable}
        id={id}
      />
    </div>
  );
}
DropDown.defaultProps = {
  isClearable: false,
  require: false,
  placeholder: "Select...",
  isSearchable: true,
  isDisabled: false,
  isLoading: false
}

export default DropDown;