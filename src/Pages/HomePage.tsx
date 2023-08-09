import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import Filter from '../Components/Filter';
import CountryApi from '../Components/CountryApi';
import '../Styles/Homepage.css'
import '../Styles/Toggle.css'

const HomePage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div>
      <div className='second-item'>
        <SearchBar setSearchQuery={setSearchQuery} />
        <Filter onFilterChange={setSelectedRegion} />
      </div>
      <div>
        <CountryApi searchQuery={searchQuery} selectedRegion={selectedRegion} />
      </div>
    </div>
  );
};

export default HomePage;
