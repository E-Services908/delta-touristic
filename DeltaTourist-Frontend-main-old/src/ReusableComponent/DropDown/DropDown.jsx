import React from "react";

function CustomDropdown({ options, onSelect }) {
  return (
    <div className="App">
      <div className="menu-container">
        <div className="menu-triger">
          {/* <img src={potrait}></img> */}
          {/* <ul className="custom-dropdown">
            {options.map((option, index) => (
              <li key={index} onClick={() => onSelect(option)}>
                {option}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;
