import React from 'react';
import { getCountries, getCountryCode } from './countries';
import CountryCard from './CountryCard';

const CountryCardsContainer = ({ countries }) => {
  return (
    <div id="resources">
      {countries.map(country => {
        const countryName = Object.keys(country)[0];
        return <CountryCard key={countryName} countryName={countryName} />
      })}
    </div>
  );
}

export default CountryCardsContainer;