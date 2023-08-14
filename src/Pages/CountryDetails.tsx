import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import "../Styles/CountryDetails.css";

interface Currency {
  code: string;
}

interface Language {
  name: string;
}

interface Country {
  name: string;
  flag: string;
  region: string;
  population: number;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders: string[];
}

const CountryDetails: React.FC = () => {
  const { countryName } = useParams<{ countryName: string }>();
  const [countryDetails, setCountryDetails] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        if (countryName) {
          const response = await axios.get<Country[]>(`https://restcountries.com/v2/name/${encodeURIComponent(countryName)}`);
          setCountryDetails(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    const fetchBorderCountries = async () => {
      try {
        if (countryDetails && countryDetails.borders && countryDetails.borders.length > 0) {
          const borderAlphaCodes = countryDetails.borders.join(',');
          const borderResponse = await axios.get<Country[]>(
            `https://restcountries.com/v2/alpha?codes=${borderAlphaCodes}`
          );
          setBorderCountries(borderResponse.data);
        }
      } catch (error) {
        console.error('Error fetching border countries:', error);
      }
    };

    fetchCountryDetails();
    fetchBorderCountries();
  }, [countryName, countryDetails]);

  if (!countryName) {
    return <div><h1>Country name is missing.</h1></div>;
  }

  if (!countryDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BackButton />
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
                <p><strong>Native Name:</strong> {countryDetails.nativeName}</p>
              </div>
              <div className="CountryDetailsPopulation">
                <p><strong>Population:</strong> {countryDetails.population.toLocaleString()}</p>
              </div>
              <div className="CountryDetailsRegion">
                <p><strong>Region:</strong> {countryDetails.region}</p>
              </div>
              <div className="CountryDetailsSub">
                <p><strong>Sub Region:</strong> {countryDetails.subregion}</p>
              </div>
              <div className="CountryDetailsCapitail">
                <p><strong>Capital:</strong> {countryDetails.capital}</p>
              </div>
            </div>
            <div className="thirdFlex">
              <div className="CountryDetailsDomain">
                <p><strong>Top Level Domain:</strong> {countryDetails.topLevelDomain.join(", ")}</p>
              </div>
              <div className="CountryDetailsCurrency">
                <p><strong>Currencies:</strong> {countryDetails.currencies.map(currency => currency.code).join(", ")}</p>
              </div>
              <div className="CountryDetailsLanguage">
                <p><strong>Languages:</strong> {countryDetails.languages.map(language => language.name).join(", ")}</p>
              </div>
            </div>
          </div>
          <div className="border-countries">
            <div>
              <strong>Border Countries:</strong>
              <div className="border-list">
                {borderCountries.length > 0
                  ? borderCountries.map((borderCountry) => (
                      <Link
                        key={borderCountry.name}
                        to={`/country/${borderCountry.name}`}
                        className="border-country-link"
                      >
                        {borderCountry.name}
                      </Link>
                    ))
                  : "No border country found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
