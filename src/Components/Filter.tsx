import React, { useState, ChangeEvent } from 'react';
import '../Styles/filterItems.css';

interface FilterProps {
  onFilterChange: (selectedValue: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedRegion(selectedValue);
    onFilterChange(selectedValue);
  };

  return (
    <div>
      <select value={selectedRegion} onChange={handleFilterChange}>
        <option value="all">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
