import React from 'react';
import { getCountries, getCountryCode } from './countries';
import CountryCard from './CountryCard';

const CountryCardsContainer = ({ countries}) => {
  console.log("countries: ", countries)
  
  return (
    
    <div id="resources">
      
      {
        Object.keys(countries).map((countryName) => {
            return <CountryCard key={countryName} countryName={countryName}/>;
        })
    }



    </div>
  );
}

export default CountryCardsContainer;