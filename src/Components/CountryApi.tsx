// CountryApi.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/CountryApi.css";

interface Country {
  name: string;
  flag: string;
  region: string;
  population: number;
  capital: string;
}

interface CountryApiProps {
  searchQuery: string;
  selectedRegion: string;
}

const CountryApi: React.FC<CountryApiProps> = ({ searchQuery, selectedRegion }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios.get<Country[]>('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredCountries = countries.filter(country => {
    if (selectedRegion !== 'all' && country.region !== selectedRegion) {
      return false;
    }
    if (searchQuery && !country.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div className="countryContent">
        {filteredCountries.map(country => (
          <div key={country.name} className='country-element'>
            <div className='count'>
              <div className='countryFlag'>
                <img src={country.flag} alt={`${country.name} Flag`} />
              </div>
              <div className='countryCard'>
                <h4>{country.name}</h4>
                <div className='details'>
                  <p> <strong>Region:</strong> {country.region}</p>
                  <p><strong>Population: </strong>{country.population}</p>
                  <p><strong>Capital:</strong> {country.capital}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CountryApi;