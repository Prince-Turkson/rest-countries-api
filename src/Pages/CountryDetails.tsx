import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import "../Styles/CountryDetails.css"

interface Country {
  name: string;
  flag: string;
  region: string;
  population: number;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  currencies: { code: string }[];
  languages: { name: string }[];
  borders: string[];
}

const CountryDetails: React.FC = () => {
  const { countryName } = useParams<{ countryName: string }>();
  const [countryDetails, setCountryDetails] = useState<Country | null>(null);

  useEffect(() => {
    if (countryName) {
      axios.get<Country[]>(`https://restcountries.com/v2/name/${encodeURIComponent(countryName)}`)
        .then(response => {
          // Assuming the API returns an array, so we take the first item as the country details
          setCountryDetails(response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching country details:', error);
        });
    }
  }, [countryName]);

  if (!countryName) {
    return <div>Country name is missing.</div>;
  }

  if (!countryDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BackButton/>
        
        <div className="CountryDetails">
             <div className="CountryDetailsFlag">
                <img src={countryDetails.flag} alt={`${countryDetails.name} Flag`} />
             </div>
              <div className="CountryFlex">
              <div className="CountryDetailsName">
                <h2>{countryDetails.name}</h2>
          </div>

                   <div className="mainFlex">
                   <div className="secondFlex">
                   <div className="CountryDetailsNative">
                <p><strong>Native Name:</strong>{countryDetails.nativeName}</p>
            </div>
            <div className="CountryDetailsPopulation">
            <p><strong>Population:</strong> {countryDetails.population}</p>
            </div>
              <div className="CountryDetailsRegion">
              <p><strong>Region:</strong> {countryDetails.region}</p>
              </div>
               <div className="CountryDetailsSub">
               <p><strong>Sub Region</strong>{countryDetails.subregion}</p>
               </div>
               <div className="CountryDetailsCapitail">
               <p><strong>Capital:</strong> {countryDetails.capital}</p>
               </div>
                   </div>
                   <div className="thirdFlex">
                   <div className="CountryDetailsDomain">
               <p><strong>Top Level Domain:</strong>{countryDetails.topLevelDomain}</p>
               </div>
               <div className="CountryDetailsCurrency">
               <p><strong>Currencies:</strong>{countryDetails.currencies.map(currency => currency.code).join(", ")}</p>
               </div>
              <div className="CountryDetailsLanguage">
                <p><strong>Language</strong>{countryDetails.languages.map(language => language.name).join(", ")}</p>
              </div>
                   </div>

                    </div>        
                   

                
           

               
              </div>

              
            
        </div>
         

      
    </div>
  );
};

export default CountryDetails;
