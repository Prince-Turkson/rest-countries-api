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

const CountryInfo: React.FC = () => {
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

  return (
    <div>
    
      <div className = "countryContent">
        {countries.map(country => (
          <div key={country.name}>
            <div className='countryFlag'>
            <img src={country.flag} alt={`${country.name} Flag`} />
            </div>
         
            <div>
            <h4>Name: {country.name}</h4>
            <div>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            </div>
           
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryInfo;
