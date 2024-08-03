// SearchBar.js
import React, { useState } from 'react';
import  './SearchBar.scss'
import CustomDropdown from '../../../ReusableComponent/DropDown/DropDown';
function SearchBar({ searchQuery, setSearchQuery, searchCategory }) {
  const [showDropdown,setShowDropDown]=useState(false);
  const[selectedOption,setSelectedOption]=useState();
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search:', searchQuery, 'Category:', selectedOption);
  };
  const handleInputFocus = () => {
    setShowDropDown(true);
  };
  
  const handleInputBlur = () => {
    setShowDropDown(false);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropDown(false);
  };
  
  
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={handleInputFocus} //show dropdown on focus
        onBlur={handleInputBlur}//hide dropdown on blur
        placeholder="Places to go, things to do, hotels..."
      />
      <button onClick={handleSearch}>Search</button>
      {showDropdown &&(
        <CustomDropdown
        options={['Options1','option2','option3']}
        onSelect={(options)=>setSelectedOption(options)}
        />
      )  }
    </div>
  );
}

export default SearchBar;
