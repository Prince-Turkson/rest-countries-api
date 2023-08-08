import React from 'react';
import '../Styles/filterItems.css';


const Filter = () => {
  return (
    <div>
            <select>
            <option value="all">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
         </select>
      
    </div>
  );
}

export default Filter;
