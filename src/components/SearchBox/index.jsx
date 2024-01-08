import React from "react";
import { Search, RotateCw } from "react-feather";
import "./index.css";

const SearchBox = ({
  type = "text",
  placeholder = "Search",
  onChange,
  value,
  required = false,
  className,
}) => {
  return (
    <div className={`search-input ${className}`}>
      <Search color="#C4C4C4"/>
      <input
        type={type}
        // value={value}
        placeholder={placeholder}
        // onChange={onChange}
        required={required}
      />
      <div className="bg-white rounded-circle rotateCw">
          <RotateCw color="#C4C4C4" size={20} className="ml-2"/>
      </div>
    </div>
  );
};

export default SearchBox;
