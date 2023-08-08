import React from 'react';
import { FiSearch } from 'react-icons/fi';
import '../Styles/searchBar.css'
import Filter from './Filter';

const SearchBar = () => {
  return (
    <div className='SearchContent'>
        <div className='SearchContentDetails'>
          <div className='SearchButton'>
            <FiSearch size={20} color='#848484'/>
          </div>
          <div className='SearchInputField'>
          <input type='search' placeholder='Search for a country ...' />
          </div>
        </div>
      <Filter />

    </div>
  );
}

export default SearchBar;
