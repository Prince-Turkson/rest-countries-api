import React, { ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import '../Styles/searchBar.css';

interface SearchBarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='SearchContent'>
      <div className='SearchContentDetails'>
        <div className='SearchButton'>
          <FiSearch size={20} color='#848484' />
        </div>
        <div className='SearchInputField'>
          <input
            type='search'
            placeholder='Search for a country ...'
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
